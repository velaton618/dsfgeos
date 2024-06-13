"use server";

import { INews } from "@/models/INews";
import { createClient } from "@/supabase/client";

export async function getNews(path: string): Promise<INews | null> {
  const supabase = createClient();
  const { data } = await supabase.from("news").select("*").eq("path", path);

  if (data) {
    return data[0];
  }

  return data;
}
