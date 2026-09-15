import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KWC | Fencing Wire & Mesh in Nelamangala" },
      { name: "description", content: "Quality fencing wire, chain-link mesh and welded fencing for farms, homes and industries in Nelamangala and Bengaluru." },
      { property: "og:title", content: "Karnataka Wire Corporation" },
      { property: "og:description", content: "Strong fencing and trusted protection for farms, plots, homes and industries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
