export interface Article {
  id: string;
  title: string;
  tags: string[];
  date: string;
  url?: string;
}

export interface Paper {
  title: string;
  titleEn?: string;
  authors: string;
  journal?: string;
  year: string;
  status: "published" | "thesis" | "submitted" | "pending";
  doi?: string;
  tags: string[];
}

export const articles: Article[] = [
  { id: "8893", title: "AI時代下的形成性評量：以 Quizizz AI 為例", tags: ["AI工具", "評量"], date: "2024-01", url: "https://flipedu.parenting.com.tw/article/8893" },
  { id: "8919", title: "生成式 AI 好多霧煞煞！教學場域應用怎麼挑？", tags: ["教學實踐", "工具選擇"], date: "2024-01", url: "https://flipedu.parenting.com.tw/article/8919" },
  { id: "8926", title: "AI教育第一線視角：生成式AI融入教學生態的5模態", tags: ["教育理論"], date: "2024-01", url: "https://flipedu.parenting.com.tw/article/8926" },
  { id: "9048", title: "生成式 AI 幫老師充電！構思你的教師專業成長路徑", tags: ["教師成長"], date: "2024-03", url: "https://flipedu.parenting.com.tw/article/9048" },
  { id: "9324", title: "NotebookLM 中文教學應用：AI 驅動自主學習", tags: ["AI工具", "自主學習"], date: "2024-05", url: "https://flipedu.parenting.com.tw/article/9324" },
  { id: "9340", title: "Claude 3.5 讓文組寫程式：AI 浪潮該學什麼", tags: ["AI工具", "程式教育"], date: "2024-06", url: "https://flipedu.parenting.com.tw/article/9340" },
  { id: "9472", title: "AI 融入國文摹寫教學：四學模式的實踐與省思", tags: ["教學實踐", "國語文"], date: "2024-07", url: "https://flipedu.parenting.com.tw/article/9472" },
  { id: "9487", title: "Brisk Teaching 教學！解放教學即戰力", tags: ["AI工具"], date: "2024-08", url: "https://flipedu.parenting.com.tw/article/9487" },
  { id: "9496", title: "MagicSchool AI 教學：為備課、教學助攻", tags: ["AI工具"], date: "2024-08", url: "https://flipedu.parenting.com.tw/article/9496" },
  { id: "9730", title: "AI時代的寫作價值：2大文字生成工具新功能的大影響", tags: ["寫作教學"], date: "2024-08", url: "https://flipedu.parenting.com.tw/article/9730" },
  { id: "9792", title: "AI時代的媒體素養：AI帶來教育愛還是「教育礙」？", tags: ["媒體素養", "教育理論"], date: "2024-12", url: "https://flipedu.parenting.com.tw/article/9792" },
  { id: "9905", title: "Edcafe AI 落地應用：貴精不貴多的哲學", tags: ["AI工具", "教學實踐"], date: "2025-01", url: "https://flipedu.parenting.com.tw/article/9905" },
  { id: "10074", title: "國中生的AI課：從認識學習過程開始！設計AI機器人", tags: ["教學實踐", "Maker"], date: "2025-03", url: "https://flipedu.parenting.com.tw/article/10074" },
  { id: "10128", title: "善用AI工具！讓老師們成為數位教學工具開發者", tags: ["Vibe Coding", "Maker"], date: "2025-05", url: "https://flipedu.parenting.com.tw/article/10128" },
  { id: "10347", title: "用AI評量強化寫作教學！讓國文老師從修正者變引導者", tags: ["寫作教學", "評量"], date: "2025-08", url: "https://flipedu.parenting.com.tw/article/10347" },
  { id: "10457", title: "AI × SEL：利己社會氛圍讓孩子們學會同理思考", tags: ["SEL", "跨域整合"], date: "2025-11", url: "https://flipedu.parenting.com.tw/article/10457" },
  { id: "10673", title: "從趨勢洞察到理念落地：2026 AI 素養教育論壇的策展思維", tags: ["教育理論", "策展"], date: "2026-03", url: "https://flipedu.parenting.com.tw/article/10673" },
];

export const papers: Paper[] = [
  {
    title: "漢語「讓」vs「使」語意韻研究",
    titleEn: "A corpus-based study of semantic prosody in ràng and shǐ constructions",
    authors: "Wu, C., & Hsiao, H. S.",
    journal: "Chinese as a Second Language Research (CASLAR)",
    year: "2025",
    status: "published",
    doi: "10.1515/caslar-2025-2002",
    tags: ["語料庫", "語意韻", "SSCI"],
  },
  {
    title: "近義介詞之量化多維度分析：以「跟、對、給」為例",
    titleEn: "Quantitative Multidimensional Analysis of Near-Synonymous Prepositions",
    authors: "吳奇",
    journal: "國立臺灣師範大學碩士論文",
    year: "2026",
    status: "thesis",
    tags: ["語料庫", "構式語法", "碩論"],
  },
  {
    title: "AI輔助華語教材編寫之初探：推理語言模型於教材內容設計實務應用",
    authors: "吳奇",
    year: "投稿中",
    status: "submitted",
    tags: ["AI教育", "華語教學"],
  },
  {
    title: "生成式AI編製TBCL華語數位教材探索",
    titleEn: "Exploring the Path of Compiling TBCL Chinese Digital Teaching Materials with Generative AI",
    authors: "Wu, C.",
    year: "待發表",
    status: "pending",
    tags: ["AI教育", "TBCL"],
  },
  {
    title: "反義構式「有X有Y」之探究及教學啟示",
    authors: "吳奇、蕭惠貞",
    year: "待發表",
    status: "pending",
    tags: ["構式語法", "教學"],
  },
  {
    title: "性向發展與社會語用能力發展探究",
    authors: "吳奇",
    year: "待發表",
    status: "pending",
    tags: ["語用學", "社會語用"],
  },
  {
    title: "生成式AI輔助白話文本閱讀教學模式初探——以「AI伴學小助教」為例",
    authors: "吳奇、鍾幸純",
    year: "待發表",
    status: "pending",
    tags: ["AI教育", "閱讀教學"],
  },
  {
    title: "生成式人工智慧的偏見促發與語言教學應用建議",
    authors: "吳奇",
    year: "待發表",
    status: "pending",
    tags: ["AI偏見", "跨文化"],
  },
];
