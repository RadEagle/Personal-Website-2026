import type { MetadataRoute } from "next";
import { siteUrl } from "../Library/site";

export const dynamic = "force-static";

const paths = ["/", "/about-me/", "/projects/", "/projects/kanji/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
