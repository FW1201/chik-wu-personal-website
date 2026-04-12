export type NotebookCategory =
  | "教師應用"
  | "TBCL華語文教學"
  | "學生學習"
  | "國文科"
  | "親師溝通";

export interface Notebook {
  title: string;
  emoji: string;
  category: NotebookCategory;
  url: string;
}

export const notebooks: Notebook[] = [
  // ── 教師應用（5）────────────────────────────────────
  {
    title: "教學備課",
    emoji: "📋",
    category: "教師應用",
    url: "https://notebooklm.google.com/notebook/cd148d9e-a97d-4098-9420-f407938f8757",
  },
  {
    title: "行政工作",
    emoji: "🗂️",
    category: "教師應用",
    url: "https://notebooklm.google.com/notebook/0ef529ad-c4ea-418f-8473-3583cf858f9e",
  },
  {
    title: "導師工作",
    emoji: "🌟",
    category: "教師應用",
    url: "https://notebooklm.google.com/notebook/7086dc74-b605-4581-b328-6f92e5fb6b6f",
  },
  {
    title: "教師法規",
    emoji: "⚖️",
    category: "教師應用",
    url: "https://notebooklm.google.com/notebook/c1e8d7c5-2b50-4847-a226-3014f33719f2",
  },
  {
    title: "教師檔案",
    emoji: "📁",
    category: "教師應用",
    url: "https://notebooklm.google.com/notebook/a21eef2c-6350-4b79-b430-c6c6f2d019c3",
  },

  // ── TBCL 華語文教學（8）─────────────────────────────
  {
    title: "TBCL 標準體系",
    emoji: "🏛️",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/b95b18af-c3d8-4bea-ab40-3d1eef982fab",
  },
  {
    title: "TBCL 1 級",
    emoji: "1️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/b15cf5a8-db3f-42c4-9639-c8bf246efe29",
  },
  {
    title: "TBCL 2 級",
    emoji: "2️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/42f389b7-05e0-45e3-a741-8552a7617e7e",
  },
  {
    title: "TBCL 3 級",
    emoji: "3️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/19f1d922-592f-4b4c-9a7b-8f97d09af872",
  },
  {
    title: "TBCL 4 級",
    emoji: "4️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/5a09ca1c-02a5-440f-adc7-2cd344ddebcb",
  },
  {
    title: "TBCL 5 級",
    emoji: "5️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/ddacffa9-6b30-4ff6-817d-ba4e76beae2b",
  },
  {
    title: "TBCL 6 級",
    emoji: "6️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/bd043f90-5150-48d1-a763-116abaab2725",
  },
  {
    title: "TBCL 7 級",
    emoji: "7️⃣",
    category: "TBCL華語文教學",
    url: "https://notebooklm.google.com/notebook/cf7489a4-a0d4-4e92-9800-1b7822404071",
  },

  // ── 學生學習（5）────────────────────────────────────
  {
    title: "學習策略",
    emoji: "🧠",
    category: "學生學習",
    url: "https://notebooklm.google.com/notebook/5f4e5180-305d-40f7-afdc-bfc9737633a8",
  },
  {
    title: "學生組織",
    emoji: "👥",
    category: "學生學習",
    url: "https://notebooklm.google.com/notebook/37572df4-6dc4-4374-819a-bcbb141c13a1",
  },
  {
    title: "情緒思考",
    emoji: "💭",
    category: "學生學習",
    url: "https://notebooklm.google.com/notebook/f1af9167-d009-43f6-9ae7-a285a9fae748",
  },
  {
    title: "學習歷程",
    emoji: "🗺️",
    category: "學生學習",
    url: "https://notebooklm.google.com/notebook/ad8ada20-140a-451d-b89a-3e287c7d417a",
  },
  {
    title: "小論顧問",
    emoji: "📝",
    category: "學生學習",
    url: "https://notebooklm.google.com/notebook/1c8eb8fd-3924-40a0-a9de-baca392f3769",
  },

  // ── 國文科（3）──────────────────────────────────────
  {
    title: "語文常識學習",
    emoji: "📚",
    category: "國文科",
    url: "https://shorturl.at/qyyRR",
  },
  {
    title: "會考試題模擬生成",
    emoji: "✍️",
    category: "國文科",
    url: "https://shorturl.at/actyc",
  },
  {
    title: "古文學習",
    emoji: "📜",
    category: "國文科",
    url: "https://shorturl.at/4j8EJ",
  },

  // ── 親師溝通（1）────────────────────────────────────
  {
    title: "親師溝通",
    emoji: "💬",
    category: "親師溝通",
    url: "https://notebooklm.google.com/notebook/dd8fec0b-4bcd-426d-8e78-775db6b1e4c1",
  },
];
