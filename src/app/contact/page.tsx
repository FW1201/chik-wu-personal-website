"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Clock,
  Code2,
  Camera,
  Video,
  Globe,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const topics = [
  "AI教育應用",
  "NotebookLM",
  "Gemini",
  "Vibe Coding",
  "華語文教學",
  "AI素養教育",
];

const formats = [
  { label: "工作坊", detail: "2-6 小時" },
  { label: "專題演講", detail: "1-2 小時" },
  { label: "線上 / 實體", detail: "皆可配合" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/FW1201",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/fw_1201",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@kevinwu1201",
    icon: <Video className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100064094937977",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: "Email",
    url: "mailto:kevinwu@gtrainerdemo.jdn2023.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "講座邀約",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mailtoHref = `mailto:kevinwu@gtrainerdemo.jdn2023.com?subject=${encodeURIComponent(
    `[${form.subject}] 來自 ${form.name}`
  )}&body=${encodeURIComponent(form.message)}`;

  return (
    <main>
      {/* Header */}
      <section className="bg-bg-primary pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-none">
              邀請演講
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              歡迎講座邀約與合作洽詢
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info (Dark) */}
      <section className="bg-bg-primary py-24 px-6 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-8">
                聯繫表單
              </h2>
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors"
                  />
                </div>
                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    主題
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-text-tertiary transition-colors appearance-none"
                  >
                    <option value="講座邀約">講座邀約</option>
                    <option value="合作洽詢">合作洽詢</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    訊息內容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="請描述您的需求..."
                    rows={5}
                    className="w-full bg-bg-secondary border border-border-dark rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-tertiary transition-colors resize-none"
                  />
                </div>
                {/* Submit */}
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 border border-text-primary text-text-primary px-8 py-3 text-sm tracking-wide hover:bg-text-primary hover:text-text-dark transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                  發送郵件
                </a>
              </div>
            </motion.div>

            {/* Right: Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-text-tertiary" />
                  <h3 className="text-sm text-text-tertiary uppercase tracking-wide">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:kevinwu@gtrainerdemo.jdn2023.com"
                  className="text-text-primary hover:text-text-secondary transition-colors text-sm break-all"
                >
                  kevinwu@gtrainerdemo.jdn2023.com
                </a>
              </Card>

              {/* Topics */}
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-text-tertiary" />
                  <h3 className="text-sm text-text-tertiary uppercase tracking-wide">
                    可談主題
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs text-text-secondary border border-border-dark rounded-full px-3 py-1.5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Formats */}
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-text-tertiary" />
                  <h3 className="text-sm text-text-tertiary uppercase tracking-wide">
                    演講形式
                  </h3>
                </div>
                <div className="space-y-3">
                  {formats.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-text-primary">
                        {f.label}
                      </span>
                      <span className="text-xs text-text-tertiary">
                        {f.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links (Light) */}
      <section className="bg-bg-light py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="社群連結"
            subtitle="在各平台上找到我"
            align="center"
            light
          />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 border border-border-light rounded-xl px-6 py-4 text-text-dark hover:border-text-dark-secondary transition-colors group"
              >
                <span className="text-text-dark-secondary group-hover:text-text-dark transition-colors">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
