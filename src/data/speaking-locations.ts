export interface SpeakingLocation {
  name: string;
  lat: number;
  lng: number;
  city: string;
  country: string;
  events: {
    date: string;
    topic: string;
    hours: number;
  }[];
}

export const speakingLocations: SpeakingLocation[] = [
  // ── 桃園市 ──────────────────────────────────────────────
  {
    name: "大華中學",
    lat: 24.8367,
    lng: 121.2194,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2023/01/16", topic: "myViewboard 電子白板應用教學", hours: 3 },
      { date: "2023/02/20", topic: "myViewboard 電子白板融入教學", hours: 3 },
      { date: "2023/03/06", topic: "myViewboard 電子白板教學工作坊", hours: 3 },
      { date: "2023/06/12", topic: "ChatGPT 教學應用初探", hours: 2 },
      { date: "2023/09/18", topic: "GenAI 融入教學策略", hours: 2 },
      { date: "2024/01/22", topic: "Gemini 與語文教學整合", hours: 2 },
      { date: "2024/03/11", topic: "AI 工具在課堂中的實踐", hours: 2 },
      { date: "2024/09/02", topic: "NotebookLM 教學應用", hours: 2 },
      { date: "2025/02/17", topic: "AI 素養教育入門", hours: 2 },
      { date: "2025/09/01", topic: "Vibe Coding 教師工作坊", hours: 3 },
    ],
  },
  {
    name: "三民國小",
    lat: 24.9889,
    lng: 121.3121,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2024/06/05", topic: "GenAI 融入國小教學", hours: 2 },
      { date: "2025/05/14", topic: "AI 素養教育工作坊", hours: 3 },
    ],
  },
  {
    name: "霞雲國小",
    lat: 24.8189,
    lng: 121.3931,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2024/04/17", topic: "偏鄉AI教學體驗", hours: 3 },
      { date: "2024/10/23", topic: "AI 工具融入偏鄉教育", hours: 3 },
      { date: "2025/04/16", topic: "AI 素養與偏鄉教學實踐", hours: 3 },
    ],
  },
  {
    name: "桃園陽明高中",
    lat: 25.0028,
    lng: 121.2978,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2024/11/06", topic: "GenAI 融入高中教學策略", hours: 2 },
    ],
  },
  {
    name: "山東國小",
    lat: 24.9561,
    lng: 121.2247,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/03/19", topic: "AI 素養教育工作坊", hours: 3 },
    ],
  },
  {
    name: "桃園市立高中",
    lat: 24.9937,
    lng: 121.3130,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/04/09", topic: "AI 融入高中教學", hours: 2 },
    ],
  },
  {
    name: "新勢國小",
    lat: 24.9418,
    lng: 121.2256,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/05/07", topic: "AI 素養教育實踐", hours: 3 },
    ],
  },
  {
    name: "平鎮科技&自造者中心",
    lat: 24.9459,
    lng: 121.2189,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/06/18", topic: "AI 與自造教育工作坊", hours: 3 },
    ],
  },
  {
    name: "復旦中學",
    lat: 24.9962,
    lng: 121.3153,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/07/02", topic: "AI 融入中學教學", hours: 2 },
    ],
  },

  // ── 台北市 ──────────────────────────────────────────────
  {
    name: "國立台灣師範大學",
    lat: 25.0260,
    lng: 121.5289,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/03/20", topic: "GenAI 與華語文教學", hours: 2 },
      { date: "2024/10/16", topic: "NotebookLM 師培工作坊", hours: 3 },
      { date: "2025/03/12", topic: "AI 素養融入師資培育", hours: 2 },
      { date: "2025/10/15", topic: "AI 教學工具實作坊", hours: 3 },
    ],
  },
  {
    name: "石牌國中",
    lat: 25.1157,
    lng: 121.5153,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/05/08", topic: "AI 融入國中教學", hours: 2 },
      { date: "2024/11/20", topic: "NotebookLM 教學實踐", hours: 2 },
      { date: "2025/05/21", topic: "AI 素養教育工作坊", hours: 3 },
    ],
  },
  {
    name: "百齡高中",
    lat: 25.0898,
    lng: 121.5230,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/06/19", topic: "GenAI 教學應用分享", hours: 2 },
      { date: "2025/01/08", topic: "AI 工具評比與教學策略", hours: 2 },
      { date: "2025/06/11", topic: "AI 素養融入高中教學", hours: 2 },
    ],
  },
  {
    name: "靜心中學",
    lat: 25.0002,
    lng: 121.5547,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/04/23", topic: "AI 素養教育實踐", hours: 2 },
    ],
  },
  {
    name: "北投國中",
    lat: 25.1321,
    lng: 121.5012,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/03/05", topic: "AI 融入國中教學工作坊", hours: 3 },
    ],
  },
  {
    name: "國立政治大學",
    lat: 24.9878,
    lng: 121.5764,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/04/30", topic: "GenAI 與高教創新", hours: 2 },
    ],
  },
  {
    name: "台北藝術大學",
    lat: 25.1128,
    lng: 121.4642,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/05/28", topic: "AI 與藝術教育跨域對話", hours: 2 },
    ],
  },
  {
    name: "台北市立大學",
    lat: 25.0359,
    lng: 121.5143,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/06/04", topic: "AI 融入師培課程", hours: 2 },
    ],
  },

  // ── 新北市 ──────────────────────────────────────────────
  {
    name: "板橋華僑高中",
    lat: 25.0193,
    lng: 121.4657,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2024/07/03", topic: "GenAI 融入高中教學", hours: 2 },
      { date: "2025/02/26", topic: "AI 素養與教學創新", hours: 2 },
    ],
  },
  {
    name: "新北市樹林高中",
    lat: 24.9893,
    lng: 121.4204,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/03/26", topic: "AI 融入高中教學策略", hours: 2 },
    ],
  },
  {
    name: "永和國中",
    lat: 25.0112,
    lng: 121.5148,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/04/02", topic: "AI 融入國中教學", hours: 2 },
    ],
  },
  {
    name: "中和高級中學",
    lat: 24.9978,
    lng: 121.4989,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/05/01", topic: "GenAI 教學應用工作坊", hours: 2 },
    ],
  },
  {
    name: "雙溪高中",
    lat: 25.0341,
    lng: 121.8660,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/06/25", topic: "AI 融入偏鄉高中教學", hours: 2 },
    ],
  },
  {
    name: "新北高中",
    lat: 25.0142,
    lng: 121.4489,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/07/09", topic: "AI 教學工具實作", hours: 2 },
    ],
  },

  // ── 新竹 ───────────────────────────────────────────────
  {
    name: "竹光國中",
    lat: 24.7907,
    lng: 120.9622,
    city: "新竹市",
    country: "台灣",
    events: [
      { date: "2024/05/15", topic: "GenAI 融入國中教學", hours: 2 },
      { date: "2024/11/13", topic: "NotebookLM 教學應用", hours: 2 },
      { date: "2025/05/14", topic: "AI 素養教育實踐", hours: 3 },
    ],
  },
  {
    name: "關西高中",
    lat: 24.7889,
    lng: 121.1772,
    city: "新竹縣",
    country: "台灣",
    events: [
      { date: "2025/03/19", topic: "AI 融入高中教學", hours: 2 },
    ],
  },
  {
    name: "新竹高中職輔導團",
    lat: 24.8014,
    lng: 120.9716,
    city: "新竹市",
    country: "台灣",
    events: [
      { date: "2025/04/16", topic: "AI 素養與輔導工作", hours: 2 },
    ],
  },

  // ── 台中 ───────────────────────────────────────────────
  {
    name: "清水高中",
    lat: 24.2627,
    lng: 120.5587,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2024/09/25", topic: "GenAI 融入高中教學", hours: 2 },
    ],
  },
  {
    name: "台中故事協會",
    lat: 24.1477,
    lng: 120.6736,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2025/02/12", topic: "AI 與敘事力工作坊", hours: 2 },
    ],
  },
  {
    name: "國文領域輔導團台中分團",
    lat: 24.1477,
    lng: 120.6736,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2025/04/23", topic: "AI 融入國文教學", hours: 2 },
    ],
  },
  {
    name: "臺中家商",
    lat: 24.1389,
    lng: 120.6847,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2025/05/21", topic: "AI 教學工具實作坊", hours: 3 },
    ],
  },
  {
    name: "中興大學附設農業高級職業中學",
    lat: 24.1228,
    lng: 120.6747,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2025/06/11", topic: "AI 融入技職教育", hours: 2 },
    ],
  },

  // ── 彰化/南投 ──────────────────────────────────────────
  {
    name: "彰化溪州國小",
    lat: 23.8511,
    lng: 120.4847,
    city: "彰化縣",
    country: "台灣",
    events: [
      { date: "2025/03/12", topic: "AI 素養教育偏鄉實踐", hours: 3 },
    ],
  },
  {
    name: "南投法治國小",
    lat: 23.9447,
    lng: 120.7089,
    city: "南投縣",
    country: "台灣",
    events: [
      { date: "2025/04/09", topic: "AI 融入國小教學", hours: 3 },
    ],
  },
  {
    name: "名間國小",
    lat: 23.8367,
    lng: 120.7036,
    city: "南投縣",
    country: "台灣",
    events: [
      { date: "2025/05/07", topic: "AI 素養教育工作坊", hours: 3 },
    ],
  },
  {
    name: "南投草屯商工",
    lat: 23.9736,
    lng: 120.6836,
    city: "南投縣",
    country: "台灣",
    events: [
      { date: "2025/06/04", topic: "AI 融入技職教學", hours: 2 },
    ],
  },

  // ── 嘉義/台南 ──────────────────────────────────────────
  {
    name: "嘉義家職",
    lat: 23.4827,
    lng: 120.4407,
    city: "嘉義市",
    country: "台灣",
    events: [
      { date: "2025/03/26", topic: "AI 融入技職教學", hours: 2 },
    ],
  },
  {
    name: "嘉義女中",
    lat: 23.4789,
    lng: 120.4489,
    city: "嘉義市",
    country: "台灣",
    events: [
      { date: "2025/04/30", topic: "GenAI 融入高中教學", hours: 2 },
    ],
  },
  {
    name: "長榮大學",
    lat: 23.0428,
    lng: 120.3978,
    city: "台南市",
    country: "台灣",
    events: [
      { date: "2024/11/27", topic: "GenAI 與大學教學創新", hours: 2 },
      { date: "2025/05/28", topic: "AI 素養融入高教", hours: 2 },
    ],
  },
  {
    name: "成功大學",
    lat: 22.9997,
    lng: 120.2197,
    city: "台南市",
    country: "台灣",
    events: [
      { date: "2025/06/18", topic: "AI 與學術研究", hours: 2 },
    ],
  },

  // ── 高雄 ───────────────────────────────────────────────
  {
    name: "高雄科技大學",
    lat: 22.7344,
    lng: 120.2878,
    city: "高雄市",
    country: "台灣",
    events: [
      { date: "2024/08/14", topic: "GenAI 融入技職教育", hours: 2 },
      { date: "2025/01/15", topic: "AI 教學工具實作坊", hours: 3 },
      { date: "2025/08/13", topic: "Vibe Coding 工作坊", hours: 3 },
    ],
  },
  {
    name: "新莊高中 (高雄)",
    lat: 22.7589,
    lng: 120.3478,
    city: "高雄市",
    country: "台灣",
    events: [
      { date: "2025/04/02", topic: "AI 融入高中教學", hours: 2 },
    ],
  },
  {
    name: "滬江高中",
    lat: 22.6189,
    lng: 120.3089,
    city: "高雄市",
    country: "台灣",
    events: [
      { date: "2025/05/14", topic: "AI 素養與教學創新", hours: 2 },
    ],
  },
  {
    name: "蚵寮國中",
    lat: 22.7356,
    lng: 120.2289,
    city: "高雄市",
    country: "台灣",
    events: [
      { date: "2025/06/25", topic: "AI 融入偏鄉國中教學", hours: 3 },
    ],
  },

  // ── 東部/離島 ──────────────────────────────────────────
  {
    name: "都達國小",
    lat: 24.0247,
    lng: 121.1489,
    city: "南投縣仁愛鄉",
    country: "台灣",
    events: [
      { date: "2025/03/05", topic: "AI 素養教育偏鄉實踐", hours: 3 },
    ],
  },
  {
    name: "國立金門高中",
    lat: 24.4361,
    lng: 118.3178,
    city: "金門縣",
    country: "台灣",
    events: [
      { date: "2025/07/16", topic: "AI 融入離島教學", hours: 3 },
    ],
  },

  // ── 大學 ───────────────────────────────────────────────
  {
    name: "清華大學",
    lat: 24.7961,
    lng: 120.9967,
    city: "新竹市",
    country: "台灣",
    events: [
      { date: "2025/04/23", topic: "AI 與教育跨域論壇", hours: 2 },
    ],
  },
  {
    name: "中原大學師培中心",
    lat: 24.9578,
    lng: 121.2414,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/03/26", topic: "AI 融入師資培育", hours: 2 },
    ],
  },
  {
    name: "東海大學",
    lat: 24.1814,
    lng: 120.6047,
    city: "台中市",
    country: "台灣",
    events: [
      { date: "2024/07/17", topic: "GenAI 教學應用工作坊", hours: 3 },
      { date: "2025/01/08", topic: "NotebookLM 與教學創新", hours: 2 },
      { date: "2025/07/16", topic: "AI 教學工具進階實作", hours: 3 },
    ],
  },
  {
    name: "大葉大學",
    lat: 23.8728,
    lng: 120.5614,
    city: "彰化縣",
    country: "台灣",
    events: [
      { date: "2025/05/01", topic: "AI 融入大學教學", hours: 2 },
    ],
  },
  {
    name: "淡江大學華語文中心",
    lat: 25.1758,
    lng: 121.4499,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2024/12/04", topic: "GenAI 與華語文教學", hours: 2 },
      { date: "2025/06/04", topic: "AI 融入華語教學實踐", hours: 2 },
    ],
  },
  {
    name: "中山大學師培中心",
    lat: 22.6267,
    lng: 120.2647,
    city: "高雄市",
    country: "台灣",
    events: [
      { date: "2025/07/02", topic: "AI 融入師資培育工作坊", hours: 3 },
    ],
  },

  // ── 企業/展覽/線上 ─────────────────────────────────────
  {
    name: "Google for Education",
    lat: 25.0478,
    lng: 121.5319,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/07/31", topic: "Google AI 來一夏！教育工作坊", hours: 3 },
      { date: "2024/10/02", topic: "Google Gemini 教學應用", hours: 2 },
      { date: "2025/01/22", topic: "Google AI 教育生態系", hours: 2 },
      { date: "2025/04/16", topic: "Google AI 工具教學整合", hours: 2 },
      { date: "2025/07/30", topic: "Google AI 來一夏！", hours: 3 },
      { date: "2025/10/08", topic: "Google AI 教學進階應用", hours: 2 },
    ],
  },
  {
    name: "GenerativeAI 年會",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/04/17", topic: "生成式AI的知識共享革命", hours: 0.5 },
    ],
  },
  {
    name: "AIT x 關鍵評論網",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/05/21", topic: "GAIWeek 國際論壇", hours: 0.5 },
    ],
  },
  {
    name: "教育科技展",
    lat: 25.0567,
    lng: 121.6178,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/11/08", topic: "AI 教學工具展示", hours: 1 },
      { date: "2025/11/14", topic: "從 User 到 Maker：Vibe Coding與你的創新開發力", hours: 0.5 },
      { date: "2025/11/15", topic: "AI 教育創新論壇", hours: 1 },
    ],
  },
  {
    name: "龍騰文化出版社",
    lat: 25.0189,
    lng: 121.4678,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2024/08/26", topic: "吳奇不有的AI敘事力", hours: 2 },
      { date: "2025/02/05", topic: "AI 與出版業的創新應用", hours: 2 },
      { date: "2025/08/27", topic: "AI 敘事力進階工作坊", hours: 2 },
    ],
  },
  {
    name: "南一出版社",
    lat: 22.9989,
    lng: 120.2247,
    city: "台南市",
    country: "台灣",
    events: [
      { date: "2025/07/23", topic: "AI 融入教科書編輯", hours: 2 },
    ],
  },
  {
    name: "盛晶科技 JTech",
    lat: 25.0478,
    lng: 121.5178,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/09/11", topic: "AI 教育科技產品研討", hours: 2 },
      { date: "2025/03/19", topic: "AI 教育工具開發協作", hours: 2 },
      { date: "2025/09/10", topic: "AI EdTech 趨勢分享", hours: 2 },
    ],
  },
  {
    name: "PaGamO 數位奇航年會",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/08/06", topic: "AI 與遊戲化學習", hours: 1 },
    ],
  },

  // ── 國際 ───────────────────────────────────────────────
  {
    name: "USC 南加大",
    lat: 34.0224,
    lng: -118.2851,
    city: "Los Angeles",
    country: "美國",
    events: [
      { date: "2025/12/13", topic: "NotebookLM & TTS 在海外華語文教育的多模態革命", hours: 1.5 },
    ],
  },
  {
    name: "PSU 賓州州立大學",
    lat: 40.7982,
    lng: -77.8599,
    city: "Pennsylvania",
    country: "美國",
    events: [
      { date: "2025/03/30", topic: "生成式AI與華語文教學實踐", hours: 1.5 },
    ],
  },

  // ── 教育機構/學會/協會 ─────────────────────────────────
  {
    name: "國家教育研究院",
    lat: 24.9267,
    lng: 121.3689,
    city: "新北市三峽",
    country: "台灣",
    events: [
      { date: "2025/09/26", topic: "與 AI 打造TBCL 教學資料庫", hours: 1.5 },
    ],
  },
  {
    name: "世界華語文學會",
    lat: 25.0260,
    lng: 121.5289,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/06/18", topic: "AI 與華語文教學國際趨勢", hours: 1 },
    ],
  },
  {
    name: "東區特教資源中心",
    lat: 25.0478,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/04/09", topic: "AI 融入特教教學", hours: 2 },
    ],
  },
  {
    name: "高中身障中央分團",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/05/14", topic: "AI 融入身障學生教學", hours: 2 },
    ],
  },
  {
    name: "學思達教育基金會",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/03/05", topic: "AI 與翻轉教學", hours: 2 },
    ],
  },
  {
    name: "慧治文教協會",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/06/25", topic: "AI 教育公益實踐", hours: 2 },
    ],
  },
  {
    name: "中華民國環境教育學會",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/07/09", topic: "AI 融入環境教育", hours: 1.5 },
    ],
  },
  {
    name: "手語課程遠距直播",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/05/28", topic: "AI 融入手語教學 (線上)", hours: 2 },
    ],
  },
  {
    name: "新北市健康與體育輔導團",
    lat: 25.0112,
    lng: 121.4489,
    city: "新北市",
    country: "台灣",
    events: [
      { date: "2025/04/02", topic: "AI 融入體育教學", hours: 2 },
    ],
  },
  {
    name: "全國高中創新教學知能研習",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/07/23", topic: "AI 創新教學策略", hours: 2 },
    ],
  },
  {
    name: "DWS 高中職英語教師社群",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/08/20", topic: "AI 融入英語教學", hours: 2 },
    ],
  },

  // ── 其他 ───────────────────────────────────────────────
  {
    name: "泛科學院",
    lat: 25.0478,
    lng: 121.5319,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2024/12/11", topic: "AI 科普教育講座", hours: 2 },
    ],
  },
  {
    name: "科技島 & 1111人力銀行",
    lat: 25.0478,
    lng: 121.5319,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/02/19", topic: "AI 與職場轉型", hours: 1.5 },
    ],
  },
  {
    name: "Y亮校長練功房",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/01/15", topic: "AI 融入校務管理 (線上)", hours: 2 },
    ],
  },
  {
    name: "Edcafe AI",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/02/26", topic: "AI 教育工具實作 (線上)", hours: 2 },
      { date: "2025/08/06", topic: "AI EdTech 趨勢分享 (線上)", hours: 2 },
    ],
  },
  {
    name: "資料科學家的工作日常",
    lat: 25.0330,
    lng: 121.5654,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/03/12", topic: "AI 與資料科學教育 (線上)", hours: 1.5 },
    ],
  },
  {
    name: "民權國中",
    lat: 25.0612,
    lng: 121.5189,
    city: "台北市",
    country: "台灣",
    events: [
      { date: "2025/04/16", topic: "AI 融入國中教學", hours: 2 },
    ],
  },
  {
    name: "仁和國小",
    lat: 24.9789,
    lng: 121.3089,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2025/05/21", topic: "AI 素養教育工作坊", hours: 3 },
    ],
  },
  {
    name: "大興高中",
    lat: 24.9447,
    lng: 121.2247,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2024/10/30", topic: "GenAI 融入高中教學", hours: 2 },
      { date: "2025/06/11", topic: "AI 素養與教學創新", hours: 2 },
    ],
  },
  {
    name: "三民國中",
    lat: 24.9989,
    lng: 121.3047,
    city: "桃園市",
    country: "台灣",
    events: [
      { date: "2024/06/12", topic: "GenAI 融入國中教學", hours: 2 },
      { date: "2025/01/08", topic: "AI 教學工具實作坊", hours: 3 },
      { date: "2025/07/02", topic: "AI 素養教育進階", hours: 3 },
    ],
  },
  {
    name: "華僑高中 (新竹)",
    lat: 24.8114,
    lng: 120.9689,
    city: "新竹市",
    country: "台灣",
    events: [
      { date: "2025/06/18", topic: "AI 融入高中教學策略", hours: 2 },
    ],
  },
  {
    name: "基隆八斗高中",
    lat: 25.1367,
    lng: 121.7889,
    city: "基隆市",
    country: "台灣",
    events: [
      { date: "2025/07/30", topic: "AI 融入偏鄉高中教學", hours: 3 },
    ],
  },
];

/** Total unique locations */
export const totalUniqueLocations = speakingLocations.length;

/** Total events across all locations */
export const totalEvents = speakingLocations.reduce(
  (sum, loc) => sum + loc.events.length,
  0
);
