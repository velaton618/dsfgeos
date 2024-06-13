import React from "react";
import s from "./news.module.sass";
import { createClient } from "../../supabase/server";
import { INews } from "@/models/INews";
import { headers } from "next/headers";
const LIMIT = 10;
async function getNews(page: number): Promise<INews[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("news")
    .select("*")
    .range(
      page === 0 ? 0 : (page - 1) * LIMIT,
      page === 1 ? LIMIT - 1 : (page - 1) * LIMIT + LIMIT - 1,
    );

  return data || [];
}

async function getNewsPages(): Promise<number> {
  const supabase = createClient();
  const { data } = await supabase.from("news").select("*");

  return Math.ceil((data && data.length / LIMIT) || 0);
}

export default async function News() {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";

  const path = header_url.split(process.env.NEXT_PUBLIC_URL || "")[1];
  const page = parseInt(path.split("page=")[1] || "1");
  const news: INews[] = await getNews(page);
  const newsPages = await getNewsPages();

  const createPagination = (currentPage: number, totalPages: number) => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");
    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);
    return range;
  };

  const pages = createPagination(page, newsPages);

  return (
    <div className={s.container}>
      <h1>News</h1>
      <div className={s.news}>
        {news.map((el) => (
          <div key={el.id} className={s.new}>
            <a href={el.path}>{el.title}</a>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        {page > 1 && (
          <div className={s.page}>
            <a href={`/news?page=${page - 1}`} className={s.link}>
              &lt;
            </a>
          </div>
        )}
        {pages.map((pageNumber, index) =>
          pageNumber === "..." ? (
            <span key={index} className={s.link}>
              {pageNumber}
            </span>
          ) : (
            <div key={pageNumber} className={s.page}>
              <a
                href={`/news?page=${pageNumber}`}
                className={`${s.link} ${page === pageNumber ? s.active : ""}`}
              >
                {pageNumber}
              </a>
            </div>
          ),
        )}
        {page < newsPages && (
          <div className={s.page}>
            <a href={`/news?page=${page + 1}`} className={s.link}>
              &gt;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
