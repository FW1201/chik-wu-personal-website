export type GemCategory = "繪圖" | "教學" | "簡報" | "學術" | "行政" | "趣味" | "AI工具";

export interface Gem {
  name: string;
  icon: string;
  cat: GemCategory;
  url: string;
}

export const gems: Gem[] = [
  { name: "手語教學圖卡",            icon: "🤟", cat: "教學",   url: "https://gemini.google.com/gem/1tPlNSSgJ23OahVo_0aOVO7vMsDlqJWVj?usp=sharing" },
  { name: "學術論文筆記幫手",         icon: "📚", cat: "學術",   url: "https://gemini.google.com/gem/1HGAsmR5gyxKI5b86R9DUClbpW5-1KfRl?usp=sharing" },
  { name: "3D程式模型圖製作",         icon: "🧊", cat: "趣味",   url: "https://gemini.google.com/gem/10AVIpU7dsMZerAYpegS_w9Jdro9AdR-q?usp=sharing" },
  { name: "YAML資訊圖表指令大師",     icon: "📊", cat: "簡報",   url: "https://gemini.google.com/gem/1912ddlcEf9q-wtCJ4G8QLjaVC2Hfxtl_?usp=sharing" },
  { name: "YAML簡報指令大師",         icon: "🎞️", cat: "簡報",   url: "https://gemini.google.com/gem/1Ezp6J75u0IrNQgxmzLZsRaOiNHdcsskx?usp=sharing" },
  { name: "狂想音樂創作家",           icon: "🎵", cat: "趣味",   url: "https://gemini.google.com/gem/1UMJ5WiUzjSIlBm80ADnyC7gK3PFxTlrj?usp=sharing" },
  { name: "Opal Gems提示詞架構師",    icon: "💎", cat: "AI工具", url: "https://gemini.google.com/gem/1Ia7UDXHaS7SbkjNuU02u-a1LqF8JFnQH?usp=sharing" },
  { name: "情人節圖卡繪師",           icon: "💝", cat: "繪圖",   url: "https://gemini.google.com/gem/1S7FM5LjXm4e69S2wYx65CVE5ahBrd40S?usp=sharing" },
  { name: "素養試題配圖繪師",         icon: "🖼️", cat: "繪圖",   url: "https://gemini.google.com/gem/1S7FM5LjXm4e69S2wYx65CVE5ahBrd40S?usp=sharing" },
  { name: "素養試題設計專家團隊",     icon: "📝", cat: "教學",   url: "https://gemini.google.com/gem/1Dw0XVHLVkDPVs7-tUicmBzU-5tP-rEUP?usp=sharing" },
  { name: "學術用圖快樂繪師",         icon: "🎨", cat: "繪圖",   url: "https://gemini.google.com/gem/1VsWUL5qIdszLEWxGfTELDBxHEoSD2Bcj?usp=sharing" },
  { name: "DOK學習單設計專家",        icon: "📋", cat: "教學",   url: "https://gemini.google.com/gem/1XyrMeJeMy7MSWP_NMx0bgJyO3on9yWGO?usp=sharing" },
  { name: "海報/資訊圖卡設計師",      icon: "🗂️", cat: "繪圖",   url: "https://gemini.google.com/gem/15yRFwHA0vLzrsiu57USdmcz4HQfdctJZ?usp=sharing" },
  { name: "數位精進採購小顧問",       icon: "🛒", cat: "行政",   url: "https://gemini.google.com/gem/1qKIiprEPQmln6WkFfLmhaurRfaiVJhdY?usp=sharing" },
  { name: "教學用漫畫專家",           icon: "💬", cat: "繪圖",   url: "https://gemini.google.com/gem/1jf5AoQg2hSmevQqLurP-9rPqWyBoXCjg?usp=sharing" },
  { name: "Google Slides教育簡報專家", icon: "📑", cat: "簡報",   url: "https://gemini.google.com/gem/15jKCA1snnh2dAljoP7D0FkULXU73kfjZ?usp=sharing" },
  { name: "Gemini Gems提示詞設計師",  icon: "⚙️", cat: "AI工具", url: "https://gemini.google.com/gem/1jZyJUz8pihNMxNpzdylYt5NSQN4o7yed?usp=sharing" },
  { name: "圖解力筆記設計師",         icon: "🗒️", cat: "學術",   url: "https://gemini.google.com/gem/1l77qEKaFbAFbvBwgbB04LyVlvpNHsctO?usp=sharing" },
  { name: "黑白學習單大師",           icon: "📄", cat: "教學",   url: "https://gemini.google.com/gem/1F-ekj1bpo2tHWJkxCmiBBRTcSvZelQ7c?usp=sharing" },
  { name: "公文草擬大師",             icon: "📜", cat: "行政",   url: "https://gemini.google.com/gem/1KETnUC9TAjQ4Edu2cB3DG22N0PoxguHL?usp=sharing" },
  { name: "素養導向教案設計師",       icon: "🏫", cat: "教學",   url: "https://gemini.google.com/gem/1VydJloOuzZc29o1IdVlWHe_U_KaNsSwu?usp=sharing" },
  { name: "提示詞優化專家",           icon: "🔧", cat: "AI工具", url: "https://gemini.google.com/gem/1n2ffavcC-qe4THgonxV4nNAdH8i5Ova4?usp=sharing" },
];

export const gemCategories: GemCategory[] = ["繪圖", "教學", "簡報", "學術", "行政", "趣味", "AI工具"];

export const gemCategoryCount = gemCategories.map((cat) => ({
  cat,
  count: gems.filter((g) => g.cat === cat).length,
}));
