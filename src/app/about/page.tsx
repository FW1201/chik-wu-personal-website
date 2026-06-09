import { Metadata } from "next";
import { profile } from "@/data/profile";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "關於吳奇",
  description:
    "吳奇（Chi. K. Wu）— AI × 教育講師、數位敘事力期刊主編。臺師大華語文教學碩士、Google Certified Trainer。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient profile={profile} />;
}
