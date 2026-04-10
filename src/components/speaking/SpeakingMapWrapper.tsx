"use client";

import dynamic from "next/dynamic";

const SpeakingMap = dynamic(
  () =>
    import("@/components/speaking/SpeakingMap").then((m) => m.SpeakingMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] bg-bg-secondary rounded-xl animate-pulse" />
    ),
  }
);

export function SpeakingMapWrapper() {
  return <SpeakingMap />;
}
