import { Code2, Camera, Video, Mail, BookOpen, AtSign } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialLinks: Array<{
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
}> = [
  { href: "https://github.com/FW1201", label: "GitHub", Icon: Code2 },
  {
    href: "https://www.facebook.com/profile.php?id=100064094937977",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.threads.net/@journal_of_digital_narrative",
    label: "Threads",
    Icon: AtSign,
  },
  {
    href: "https://flipedu.parenting.com.tw/author/1112",
    label: "FlipEdu",
    Icon: BookOpen,
  },
  {
    href: "https://www.instagram.com/journal_of_digital_narrative/",
    label: "Instagram",
    Icon: Camera,
  },
  {
    href: "https://www.youtube.com/@Journal_of_Digital_Narrative",
    label: "YouTube",
    Icon: Video,
  },
  { href: "mailto:kevinwu@gtrainerdemo.jdn2023.com", label: "Email", Icon: Mail },
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

          <div className="flex items-center gap-5 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label={link.label}
              >
                <link.Icon size={20} />
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
