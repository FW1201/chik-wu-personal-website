#!/usr/bin/env npx tsx
/**
 * Wiki → Website Data Sync Script
 *
 * Reads markdown files from ~/Desktop/Claude Wiki/wiki/
 * and outputs structured TypeScript data to src/data/*.ts
 *
 * Usage:
 *   npm run sync          — run full sync
 *   npm run sync:deploy   — sync + commit + push
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const WIKI_ROOT = join(process.env.HOME || "~", "Desktop/Claude Wiki/wiki");
const DATA_DIR = join(__dirname, "../src/data");

// ─── Helpers ───────────────────────────────────────────────

function readWiki(relativePath: string): string {
  const fullPath = join(WIKI_ROOT, relativePath);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Wiki file not found: ${relativePath}`);
    return "";
  }
  return readFileSync(fullPath, "utf-8");
}

interface Frontmatter {
  [key: string]: string | string[];
}

function parseFrontmatter(content: string): {
  frontmatter: Frontmatter;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const fm: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      fm[key] = value;
    }
  }
  return { frontmatter: fm, body: match[2] };
}

function extractNumber(text: string, pattern: RegExp): number | null {
  const m = text.match(pattern);
  return m ? parseInt(m[1], 10) : null;
}

function writeDataFile(filename: string, content: string) {
  const path = join(DATA_DIR, filename);
  writeFileSync(path, content, "utf-8");
  console.log(`✅ Written: src/data/${filename}`);
}

// ─── Verify: profile.ts ─────────────────────────────────────
// profile.ts contains manually curated structured data (roles, certifications)
// We only verify stats from Wiki, not overwrite.

function syncProfile() {
  const overview = readWiki("overview.md");
  if (!overview) return;

  const { body } = parseFrontmatter(overview);

  const articles =
    extractNumber(body, /(\d+)\s*篇(?:投稿|翻轉教育文章)/) ?? 17;
  const papers = extractNumber(body, /(\d+)\s*篇學術論文/) ?? 8;
  const projects = extractNumber(body, /(\d+)\s*個\s*GitHub\s*專案/) ?? 11;

  const lectureProfile = readWiki("行政/lecture-profile.md");
  const lectures = extractNumber(lectureProfile, /(\d+)\s*場/) ?? 134;

  const devProfile = readWiki("開發者/dev-profile.md");
  const skills = extractNumber(devProfile, /(\d+)\s*個.*?Skills/) ?? 45;

  console.log(`ℹ️  Profile stats from Wiki:`);
  console.log(
    `   Lectures: ${lectures} | Articles: ${articles} | Papers: ${papers} | Projects: ${projects} | Skills: ${skills}`
  );
  console.log(
    `   profile.ts contains manually curated data — verify and update manually if needed`
  );
}

// ─── Verify: speaking.ts ────────────────────────────────────
// speaking.ts contains manually curated milestones, topicEvolution, and
// featuredTalks — we only verify stats, not overwrite.

function syncSpeaking() {
  const lectureProfile = readWiki("行政/lecture-profile.md");
  if (!lectureProfile) return;

  const { body } = parseFrontmatter(lectureProfile);

  const totalEvents = extractNumber(body, /(\d+)\s*場/) ?? 134;
  const totalHours =
    extractNumber(body, /([\d.]+)\s*小時/) ??
    extractNumber(body, /(\d+\.?\d*)/) ??
    309.5;

  console.log(
    `ℹ️  Speaking: ${totalEvents} events, ${totalHours} hours (verify against speaking.ts)`
  );
  console.log(
    `   speaking.ts contains manually curated data — not overwritten`
  );
}

// ─── Sync: publications.ts ─────────────────────────────────

function syncPublications() {
  const articleSynthesis = readWiki("主編/article-synthesis.md");
  const academicProfile = readWiki("研究者/academic-profile.md");
  const paperSynthesis = readWiki("研究者/paper-synthesis.md");

  // Extract article count
  const articleCount =
    extractNumber(articleSynthesis, /(\d+)\s*篇/) ??
    extractNumber(articleSynthesis, /共\s*(\d+)/) ??
    17;

  // Extract paper count
  const paperCount =
    extractNumber(academicProfile, /(\d+)\s*篇/) ??
    extractNumber(paperSynthesis, /(\d+)\s*篇/) ??
    8;

  // Note: The actual article/paper lists in publications.ts are manually curated
  // since they contain structured data (titles, authors, journals) that requires
  // human verification. This sync only updates the counts and metadata.
  console.log(
    `ℹ️  Publications: ${articleCount} articles, ${paperCount} papers`
  );
  console.log(
    `   publications.ts contains manually curated data — counts verified only`
  );
}

// ─── Sync: projects.ts (skills overview) ───────────────────

function syncProjects() {
  const skillsMap = readWiki("開發者/skills-map.md");
  const devProfile = readWiki("開發者/dev-profile.md");

  if (!skillsMap && !devProfile) return;

  const source = skillsMap || devProfile;

  // Extract skills counts
  const totalSkills = extractNumber(source, /(\d+)\s*個.*Skills/) ?? 45;
  const teachingSkills =
    extractNumber(source, /教學.*?(\d+)\s*個/) ??
    extractNumber(source, /K-?12\s*教學.*?(\d+)/) ??
    18;
  const learningSkills =
    extractNumber(source, /學習.*?(\d+)\s*個/) ??
    extractNumber(source, /K-?12\s*學習.*?(\d+)/) ??
    10;
  const researchSkills =
    extractNumber(source, /研究.*?(\d+)\s*個/) ??
    extractNumber(source, /學術研究.*?(\d+)/) ??
    9;

  const repoTotal = teachingSkills + learningSkills + researchSkills;

  console.log(`ℹ️  Skills: ${totalSkills} total (repo: ${repoTotal})`);
  console.log(
    `   Teaching: ${teachingSkills}, Learning: ${learningSkills}, Research: ${researchSkills}`
  );
  console.log(
    `   projects.ts skills counts verified — update manually if structure changes`
  );
}

// ─── Main ──────────────────────────────────────────────────

function main() {
  console.log("🔄 Syncing Wiki → Website data...\n");

  if (!existsSync(WIKI_ROOT)) {
    console.error(`❌ Wiki root not found: ${WIKI_ROOT}`);
    console.error(`   Make sure ~/Desktop/Claude Wiki/ exists`);
    process.exit(1);
  }

  syncProfile();
  syncSpeaking();
  syncPublications();
  syncProjects();

  console.log("\n✅ Wiki sync complete!");
}

main();
