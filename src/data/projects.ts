export interface Project {
  name: string;
  description: string;
  category: "Chrome Extension" | "GAS System" | "AI Studio App" | "Skills Repo" | "Gemini Gems";
  status: string;
  github?: string;
  cws?: string;
  live?: string;
  tags: string[];
}

export const projects: Project[] = [
  // Chrome Extensions
  {
    name: "Chrome EDU Toolbox",
    description: "教育白板工具箱 Chrome 擴充功能",
    category: "Chrome Extension",
    status: "已上架 CWS",
    cws: "https://chromewebstore.google.com/detail/chrome-edu-toolbox/ghcbaidbgmbjembobdhpjlieopcnacoi",
    tags: ["Chrome", "教育", "白板"],
  },
  {
    name: "ChatGPT EDU Prompt Assistant TW",
    description: "ChatGPT 教育提示詞助手（臺灣版）",
    category: "Chrome Extension",
    status: "已上架 CWS",
    github: "https://github.com/FW1201/ChatGPT-EDU-Prompt-Assistant-TW",
    cws: "https://chromewebstore.google.com/detail/chatgpt-edu-prompt-assist/hnnlhchjbkebmlbfpalgamheklhhibmd",
    tags: ["Chrome", "ChatGPT", "Prompt"],
  },
  {
    name: "Gemini EDU Prompt Assistant TW",
    description: "Gemini 教育提示詞助手（臺灣版）",
    category: "Chrome Extension",
    status: "已上架 CWS v2.1.2",
    cws: "https://chromewebstore.google.com/detail/gemini-edu-prompt-assista/hdgldjckecimnemejlogfiiebpbdnapa",
    tags: ["Chrome", "Gemini", "CWS"],
  },
  {
    name: "NotebookLM EDU Enhancer TW",
    description: "NotebookLM 教育增強器（臺灣版）",
    category: "Chrome Extension",
    status: "已上架 CWS v8.5",
    cws: "https://chromewebstore.google.com/detail/notebooklm-%E5%8C%AF%E5%87%BA%E5%B7%A5%E5%85%B7/modkfkgmcjbkjhjmhjakohhnfbleghoj",
    tags: ["Chrome", "NotebookLM", "教育"],
  },
  {
    name: "Chrome NOTE Toolbox",
    description: "筆記工具箱 Chrome 擴充功能",
    category: "Chrome Extension",
    status: "已上架 CWS",
    cws: "https://chromewebstore.google.com/detail/chrome-note-toolbox/adfhmlcncdkgplckblejoggnmjekakkd",
    tags: ["Chrome", "筆記", "工具"],
  },
  {
    name: "GAS AI Companion",
    description: "Google Apps Script AI 輔助工具",
    category: "Chrome Extension",
    status: "私有工具",
    tags: ["Chrome", "GAS", "AI"],
  },
  // GAS Systems
  {
    name: "Receipt System",
    description: "收據管理系統 — Google Apps Script 自動化",
    category: "GAS System",
    status: "運作中",
    github: "https://github.com/FW1201/Receipt-System",
    tags: ["GAS", "行政", "自動化"],
  },
  {
    name: "Leave Application System v2.0",
    description: "教師請假系統 — Google Apps Script",
    category: "GAS System",
    status: "v2.0",
    github: "https://github.com/FW1201/Leave-Application-System-for-Teachers",
    tags: ["GAS", "行政", "請假"],
  },
  // AI Studio Apps
  {
    name: "SEL Game of Ancient People",
    description: "社會情緒學習古人遊戲 — Google AI Studio App",
    category: "AI Studio App",
    status: "運作中",
    github: "https://github.com/FW1201/SEL-Game-of-Ancient-People",
    tags: ["AI Studio", "SEL", "遊戲"],
  },
  {
    name: "Meal Carbon Footprint Analyzer",
    description: "餐點碳足跡分析器 — Google AI Studio App",
    category: "AI Studio App",
    status: "運作中",
    github: "https://github.com/FW1201/Meal-Carbon-Footprint-Analyzer",
    tags: ["AI Studio", "環保", "分析"],
  },
  // Skills Repos
  {
    name: "tw-edu-skills",
    description: "臺灣 K-12 教學 Claude Code Skills 套組 — 台灣首套開源教育 AI Skills",
    category: "Skills Repo",
    status: "5⭐ 7 forks",
    github: "https://github.com/FW1201/tw-edu-skills",
    tags: ["Claude Code", "Skills", "教育", "開源"],
  },
  {
    name: "tw-stu-skills",
    description: "臺灣 K-12 學生 Claude Code Skills 套組（10 Skills）",
    category: "Skills Repo",
    status: "開源",
    github: "https://github.com/FW1201/tw-stu-skills",
    tags: ["Claude Code", "Skills", "學生", "開源"],
  },
  {
    name: "tw-research-skills",
    description: "學術研究 Claude Code Skills 套組（9 Skills）",
    category: "Skills Repo",
    status: "開源",
    github: "https://github.com/FW1201/tw-research-skills",
    tags: ["Claude Code", "Skills", "學術", "開源"],
  },
  // Gemini Gems
  {
    name: "數位敘事力期刊 Gems 大全",
    description: "22 個 Gemini Gems 工具入口，含繪圖、教學、簡報、學術等 7 分類",
    category: "Gemini Gems",
    status: "22 Gems",
    github: "https://github.com/FW1201/gemini-gems-portal",
    live: "https://gems-portal.vercel.app",
    tags: ["Gemini", "Gems", "AI工具", "教育"],
  },
];

export const skillsOverview = {
  total: 92,
  version: "V6.2",
  // tw-edu-skills repo: 3 套 59 Skills
  twEduSkills: {
    repoTotal: 59,
    sets: [
      {
        name: "K-12 教學 Skills",
        count: 24,
        description: "108課綱教案、素養命題、學習單、評量規準、PBL設計等",
        examples: ["tw-edu-lesson-plan-108", "tw-edu-exam-generator", "tw-edu-rubric-designer", "tw-edu-pbl-designer"],
      },
      {
        name: "K-12 學習 Skills",
        count: 10,
        description: "升學備考、學習歷程、寫作教練、AI素養、蘇格拉底問答等",
        examples: ["tw-stu-exam-prep", "tw-stu-writing-coach", "tw-stu-ai-literacy", "tw-stu-socratic"],
      },
      {
        name: "學術研究 Skills",
        count: 25,
        description: "研究計畫書、文獻查核、統計顧問、引用校對、學術辯證等",
        examples: ["tw-research-proposal-diamond", "tw-research-stat-consultant", "tw-research-lit-review"],
      },
    ],
  },
  // 其他獨立 Skills
  otherSkills: [
    { name: "知識工作者", count: 4, description: "社群圖卡、週報、主編工作流、社群引擎" },
    { name: "知識庫", count: 4, description: "JDN Wiki ingest/lint/query/management" },
    { name: "系統 Skills", count: 24, description: "Hyperframes 框架、Superpowers、系統工具" },
  ],
};
