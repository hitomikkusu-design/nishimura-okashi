/// <reference types="@types/google.maps" />

import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

let mapsScriptPromise: Promise<void> | null = null;

function loadMapScript(apiKey: string) {
  if (!mapsScriptPromise) {
    mapsScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=marker`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Google Maps script"));
      document.head.appendChild(script);
    });
  }
  return mapsScriptPromise;
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
  /** Link used in place of the map when no API key is configured, or if the map fails to load. */
  googleMapsUrl: string;
}

export function MapView({
  className,
  initialCenter = { lat: 33.32998, lng: 133.22658 }, // 高知県中土佐町久礼
  initialZoom = 14,
  onMapReady,
  googleMapsUrl,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [failed, setFailed] = useState(false);

  const init = usePersistFn(async () => {
    if (!API_KEY) return;
    try {
      await loadMapScript(API_KEY);
    } catch {
      setFailed(true);
      return;
    }
    if (!mapContainer.current || !window.google) {
      setFailed(true);
      return;
    }
    map.current = new window.google.maps.Map(mapContainer.current, {
      zoom: initialZoom,
      center: initialCenter,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
      mapId: "DEMO_MAP_ID",
    });
    onMapReady?.(map.current);
  });

  useEffect(() => {
    init();
  }, [init]);

  if (!API_KEY || failed) {
    return (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full h-[500px] flex flex-col items-center justify-center gap-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",
          className
        )}
      >
        <ExternalLink size={28} />
        <span className="font-medium">Googleマップで開く</span>
      </a>
    );
  }

  return (
    <div ref={mapContainer} className={cn("w-full h-[500px]", className)} />
  );
}
