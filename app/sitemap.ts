import type { MetadataRoute } from "next";
import { mainNav, site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
