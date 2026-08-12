import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spice Garden Menu",
    short_name: "Spice Garden",
    description: "Browse and order from Spice Garden restaurant menu",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#1B4332",
    orientation: "portrait",
    categories: ["food", "restaurant"],
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
