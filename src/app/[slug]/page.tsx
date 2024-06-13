import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";
import { INews } from "@/models/INews";
import { createClient } from "@/supabase/server";
import { headers } from "next/headers";
import React from "react";

async function getNews(path: string): Promise<INews | null> {
  const supabase = createClient();
  const { data } = await supabase.from("news").select("*").eq("path", path);

  if (data) {
    return data[0];
  }

  return data;
}

export default async function NewsPage() {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";

  const path = header_url.split(process.env.NEXT_PUBLIC_URL || "")[1];
  const news = await getNews(path);

  return <MarkdownPage source={news?.content || "# 404 | Not found"} />;
}
