import { Metadata } from "next";
import seoConfig from "@/data/seo-config.json";

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  keywords: seoConfig.defaultKeywords.join(", "),
}; 