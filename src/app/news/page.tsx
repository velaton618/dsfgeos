import React from "react";
import s from "./news.module.sass";
import { createClient } from "../../supabase/server";
import { INews } from "@/models/INews";

async function getNews(): Promise<INews[]> {
  const supabase = createClient();
  const { data } = await supabase.from("news").select();

  return data || [];
}

export default async function News() {
  const news: INews[] = await getNews();
  console.log(news);

  return (
    <div className={s.news}>
      {news.map((el) => (
        <div key={el.id} className={s.new}>
          <a href={el.path}>{el.title}</a>
        </div>
      ))}
    </div>
  );
}
