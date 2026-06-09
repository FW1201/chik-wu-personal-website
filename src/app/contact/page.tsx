"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Clock,
  Code2,
  Camera,
  Video,
  AtSign,
  BookOpen,
  Send,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

function FacebookIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { Card } from "@/components/ui/Card";

type ToastState = { type: "success" | "error"; message: string } | null;

const topics = [
  { name: "AI教育應用",  detail: "生成式 AI 融入教學設計與評量" },
  { name: "AI素養教育",  detail: "K-12 AI 素養課程與論壇策展" },
  { name: "NotebookLM",  detail: "AI 筆記本驅動的自主學習" },
  { name: "Gemini",      detail: "Google AI 工具的教育現場應用" },
  { name: "Vibe Coding", detail: "教師成為數位工具開發者" },
  { name: "華語文教學",  detail: "AI 輔助華語文教材與 TBCL" },
];

const formats = [
  { label: "工作坊",     detail: "2–6 小時" },
  { label: "專題演講",   detail: "2 小時以上" },
  { label: "線上 / 實體", detail: "皆可配合" },
];

const trustStats = [
  { value: "154+",  label: "場演講" },
  { value: "358.5", label: "累計小時" },
  { value: "38+",   label: "合作機構" },
  { value: "USC",   label: "海外講座經驗" },
];

const steps = [
  { step: "01", title: "來信說明需求", detail: "對象、人數、主題方向與期望日期" },
  { step: "02", title: "確認主題與形式", detail: "依需求客製演講或工作坊內容" },
  { step: "03", title: "報價與排程", detail: "確認講師費與行政細節後排定日期" },
];

const socialLinks = [
  { name: "GitHub",    url: "https://github.com/FW1201",                                           icon: <Code2       className="w-5 h-5" /> },
  { name: "Facebook",  url: "https://www.facebook.com/profile.php?id=100064094937977",             icon: <FacebookIcon /> },
  { name: "Threads",   url: "https://www.threads.net/@journal_of_digital_narrative",               icon: <AtSign      className="w-5 h-5" /> },
  { name: "FlipEdu",   url: "https://flipedu.parenting.com.tw/author/1112",                        icon: <BookOpen    className="w-5 h-5" /> },
  { name: "Instagram", url: "https://www.instagram.com/journal_of_digital_narrative/",             icon: <Camera      className="w-5 h-5" /> },
  { name: "YouTube",   url: "https://www.youtube.com/@Journal_of_Digital_Narrative",               icon: <Video       className="w-5 h-5" /> },
  { name: "Email",     url: "mailto:kevinwu@gtrainerdemo.jdn2023.com",                             icon: <Mail        className="w-5 h-5" /> },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "講座邀約", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const dismissToast = () => setToast(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast({ type: "error", message: "請填寫姓名、電子郵件與訊息內容" });
      return;
    }

    setSending(true);
    setToast(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setToast({ type: "success", message: "訊息已成功送出，我將盡快回覆您！" });
        setForm({ name: "", email: "", subject: "講座邀約", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setToast({ type: "error", message: data.error ?? "發送失敗，請稍後再試或直接來信" });
      }
    } catch {
      setToast({ type: "error", message: "網路錯誤，請確認連線後再試" });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Toast 通知 ───────────────────────────────────── */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 max-w-sm w-full shadow-lg"
             style={{
               background: "#161613",
               border: `1px solid ${toast.type === "success" ? "#4ade80" : "#f87171"}`,
               borderLeft: `4px solid ${toast.type === "success" ? "#4ade80" : "#f87171"}`,
               borderRadius: "8px",
               padding: "16px",
             }}>
          {toast.type === "success"
            ? <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#4ade80" }} />
            : <XCircle     className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#f87171" }} />}
          <p className="text-sm flex-1" style={{ color: "#F5F2EA" }}>{toast.message}</p>
          <button onClick={dismissToast} className="flex-shrink-0 text-text-tertiary hover:text-text-primary transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[50vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/contact-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-bg-primary" />
        <div className="relative z-10 max-w-5xl">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            Speaker · Trainer · Curator
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-none">
            邀請演講
          </h1>
          <p className="mt-4 text-lg text-white/70">
            歡迎講座邀約與合作洽詢
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {trustStats.map((s) => (
              <div key={s.label}>
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-[--color-gold-bright] block">
                  {s.value}
                </span>
                <span className="text-xs text-white/50 tracking-widest uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 邀約流程 ─────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-14 border-t border-border-dark bg-bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="flex items-start gap-4">
              <span className="font-[family-name:var(--font-playfair)] text-3xl text-gold leading-none">
                {s.step}
              </span>
              <div>
                <h3 className="text-sm font-medium text-text-primary">{s.title}</h3>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Info ─────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-border-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-8">
              聯繫表單
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-text-secondary mb-2">姓名</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                       placeholder="您的姓名"
                       className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors" />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-text-secondary mb-2">電子郵件</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                       placeholder="your@email.com"
                       className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors" />
              </div>
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-text-secondary mb-2">主題</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange}
                        className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-tertiary transition-colors appearance-none">
                  <option value="講座邀約">講座邀約</option>
                  <option value="合作洽詢">合作洽詢</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-text-secondary mb-2">訊息內容</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange}
                          placeholder="請描述您的需求..." rows={5}
                          className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors resize-none" />
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 border border-[--color-gold] text-[--color-gold] px-8 py-3 text-sm tracking-wide hover:bg-[--color-gold] hover:text-bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {sending ? "發送中…" : "發送郵件"}
              </button>
            </form>
          </div>

          {/* Right: Info Cards */}
          <div className="space-y-6">
            {/* Email */}
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-text-tertiary" />
                <h3 className="text-sm text-text-tertiary uppercase tracking-wide">Email</h3>
              </div>
              <a href="mailto:kevinwu@gtrainerdemo.jdn2023.com"
                 className="text-text-primary hover:text-text-secondary transition-colors text-sm break-all">
                kevinwu@gtrainerdemo.jdn2023.com
              </a>
            </Card>

            {/* Topics */}
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-text-tertiary" />
                <h3 className="text-sm text-text-tertiary uppercase tracking-wide">可談主題</h3>
              </div>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <div key={topic.name} className="flex items-baseline justify-between gap-3">
                    <span className="text-sm text-text-primary whitespace-nowrap">{topic.name}</span>
                    <span className="text-xs text-text-tertiary text-right">{topic.detail}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Formats */}
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-text-tertiary" />
                <h3 className="text-sm text-text-tertiary uppercase tracking-wide">演講形式</h3>
              </div>
              <div className="space-y-3">
                {formats.map((f) => (
                  <div key={f.label} className="flex items-center justify-between">
                    <span className="text-sm text-text-primary">{f.label}</span>
                    <span className="text-xs text-text-tertiary">{f.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-tertiary mt-4 pt-3 border-t border-border-dark">
                講師費用、交通費核銷煩請來信商議
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Social Links ─────────────────────────────────── */}
      <section className="bg-bg-secondary px-6 md:px-12 lg:px-24 py-20 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-2 text-center">
            社群連結
          </h2>
          <p className="text-sm text-text-secondary text-center mb-10">在各平台上找到我</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 border border-border-dark rounded-xl px-6 py-4 text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-colors group">
                <span className="group-hover:text-text-primary transition-colors">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
