import { Metadata } from "next";
import { profile } from "@/data/profile";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "關於我",
};

export default function AboutPage() {
  return <AboutClient profile={profile} />;
}
