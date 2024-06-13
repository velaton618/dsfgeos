import { INews } from "@/models/INews";
import { createClient } from "@/supabase/server";
import { usePathname } from "next/navigation";
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
  const path = usePathname();
  const news = await getNews(path);

  return (
    <div>
      <div>{news?.content}</div>
    </div>
  );
}
