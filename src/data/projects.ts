export interface Project {
  name: string;
  description: string;
  category: "Chrome Extension" | "GAS System" | "AI Studio App" | "Skills Repo";
  status: string;
  github: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "Chrome EDU Toolbox",
    description: "教育工具箱 Chrome 擴充功能",
    category: "Chrome Extension",
    status: "開發中",
    github: "https://github.com/FW1201/Chrome-EDU-Toolbox",
    tags: ["Chrome", "教育", "JavaScript"],
  },
  {
    name: "ChatGPT EDU Prompt Assistant TW",
    description: "ChatGPT 教育提示詞助手（臺灣版）",
    category: "Chrome Extension",
    status: "開發中",
    github: "https://github.com/FW1201/ChatGPT-EDU-Prompt-Assistant-TW",
    tags: ["Chrome", "ChatGPT", "Prompt"],
  },
  {
    name: "Gemini EDU Prompt Assistant TW",
    description: "Gemini 教育提示詞助手（臺灣版），已上架 Chrome Web Store",
    category: "Chrome Extension",
    status: "已上架 CWS v2.1.2",
    github: "https://github.com/FW1201/Gemini-EDU-Prompt-Assistant-TW",
    tags: ["Chrome", "Gemini", "CWS"],
  },
  {
    name: "GAS AI Companion",
    description: "Google Apps Script AI 輔助工具",
    category: "Chrome Extension",
    status: "開發中",
    github: "https://github.com/FW1201/GAS-AI-Companion",
    tags: ["Chrome", "GAS", "AI"],
  },
  {
    name: "NotebookLM EDU Enhancer TW",
    description: "NotebookLM 教育增強器（臺灣版）",
    category: "Chrome Extension",
    status: "v8.5",
    github: "https://github.com/FW1201/NotebookLM-EDU-Enhancer-TW",
    tags: ["Chrome", "NotebookLM", "教育"],
  },
  {
    name: "Chrome NOTE Toolbox",
    description: "筆記工具箱 Chrome 擴充功能",
    category: "Chrome Extension",
    status: "開發中",
    github: "https://github.com/FW1201/Chrome-NOTE-Toolbox",
    tags: ["Chrome", "筆記", "工具"],
  },
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
  {
    name: "tw-edu-skills",
    description: "臺灣 K-12 教育 Claude Code Skills 套組 — 台灣首套開源教育 AI Skills",
    category: "Skills Repo",
    status: "5⭐ 7 forks",
    github: "https://github.com/FW1201/tw-edu-skills",
    tags: ["Claude Code", "Skills", "教育", "開源"],
  },
];

export const skillsOverview = {
  total: 45,
  version: "V3.0",
  // tw-edu-skills repo: 3 套 37 Skills
  twEduSkills: {
    repoTotal: 37,
    sets: [
      {
        name: "K-12 教學 Skills",
        count: 18,
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
        count: 9,
        description: "研究計畫書、文獻查核、統計顧問、引用校對、學術辯證等",
        examples: ["tw-research-proposal-diamond", "tw-research-stat-consultant", "tw-research-lit-review"],
      },
    ],
  },
  // 其他獨立 Skills
  otherSkills: [
    { name: "知識工作者", count: 4, description: "社群圖卡、週報、主編工作流、社群引擎" },
    { name: "知識庫", count: 4, description: "Notion 架構管理、入庫、整理、查詢" },
  ],
};
