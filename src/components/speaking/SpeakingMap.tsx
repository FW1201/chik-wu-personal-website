"use client";

import { useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { speakingLocations } from "@/data/speaking-locations";

const YEARS = ["全部", "2023", "2024", "2025", "2026"] as const;

const VIEWS = {
  taiwan: { center: [23.5, 121.0] as [number, number], zoom: 7 },
  world: { center: [25.0, -40.0] as [number, number], zoom: 2 },
};

export function SpeakingMap() {
  const [selectedYear, setSelectedYear] = useState<string>("全部");
  const [view, setView] = useState<"taiwan" | "world">("taiwan");

  const filteredLocations = useMemo(() => {
    if (selectedYear === "全部") return speakingLocations;
    return speakingLocations
      .map((loc) => ({
        ...loc,
        events: loc.events.filter((e) => e.date.startsWith(selectedYear)),
      }))
      .filter((loc) => loc.events.length > 0);
  }, [selectedYear]);

  const getRadius = (eventCount: number) => {
    const min = 5;
    const max = 15;
    const maxEvents = Math.max(
      ...speakingLocations.map((l) => l.events.length),
      1
    );
    return min + ((eventCount - 1) / Math.max(maxEvents - 1, 1)) * (max - min);
  };

  return (
    <div className="relative">
      {/* Year filter */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {YEARS.map((year, i) => (
          <span key={year} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-text-tertiary text-sm select-none">|</span>
            )}
            <button
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedYear === year
                  ? "bg-text-primary text-text-dark"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {year}
            </button>
          </span>
        ))}

        {/* View toggle */}
        <button
          onClick={() => setView(view === "taiwan" ? "world" : "taiwan")}
          className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-colors"
        >
          {view === "taiwan" ? "World View" : "Taiwan View"}
        </button>
      </div>

      {/* Map */}
      <style>{`
        .speaking-map .leaflet-tile-pane {
          filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2);
        }
        .speaking-map .leaflet-container {
          background: #0a0a0a;
        }
        .speaking-map .leaflet-control-attribution {
          background: rgba(10, 10, 10, 0.8) !important;
          color: #707070 !important;
          font-size: 10px !important;
        }
        .speaking-map .leaflet-control-attribution a {
          color: #707070 !important;
        }
        .speaking-map .leaflet-control-zoom a {
          background: #1a1a1a !important;
          color: #f0f0f0 !important;
          border-color: #2a2a2a !important;
        }
        .speaking-map .leaflet-control-zoom a:hover {
          background: #2a2a2a !important;
        }
      `}</style>
      <div className="speaking-map rounded-xl overflow-hidden border border-border-dark">
        <MapContainer
          key={view}
          center={VIEWS[view].center}
          zoom={VIEWS[view].zoom}
          scrollWheelZoom={false}
          style={{ height: 500, width: "100%" }}
          className="bg-bg-primary"
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {filteredLocations.map((location) => (
            <CircleMarker
              key={`${location.name}-${selectedYear}`}
              center={[location.lat, location.lng]}
              radius={getRadius(location.events.length)}
              pathOptions={{
                color: "#0a0a0a",
                fillColor: "#f0f0f0",
                fillOpacity: 0.7,
                weight: 2,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]}>
                <div className="text-sm">
                  <p className="font-semibold">{location.name}</p>
                  <p className="text-xs text-gray-600">
                    {location.events.length} 場活動
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {location.events[location.events.length - 1]?.topic}
                  </p>
                </div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 text-xs text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#f0f0f0] border border-[#0a0a0a]" />
          演講地點
        </span>
        <span>圓圈大小 = 活動場次</span>
        <span>
          篩選結果：{filteredLocations.length} 個地點，
          {filteredLocations.reduce((sum, l) => sum + l.events.length, 0)} 場活動
        </span>
      </div>
    </div>
  );
}
