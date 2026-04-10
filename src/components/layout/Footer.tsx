import { Code2, Camera, Video, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/FW1201", icon: Code2, label: "GitHub" },
  { href: "https://www.instagram.com/journal_of_digital_narrative/", icon: Camera, label: "Instagram" },
  { href: "https://www.youtube.com/@Journal_of_Digital_Narrative", icon: Video, label: "YouTube" },
  { href: "mailto:kevinwu@gtrainerdemo.jdn2023.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-dark bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg font-medium">
              吳奇 Chi. K. Wu
            </p>
            <p className="text-sm text-text-secondary mt-1">
              AI Education Researcher • Speaker • Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-dark text-center text-xs text-text-tertiary">
          © {new Date().getFullYear()} 吳奇 Chi. K. Wu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
