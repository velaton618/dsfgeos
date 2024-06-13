"use client";

import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";
import { getNews } from "@/lib/news";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { INews } from "@/models/INews";

export default function NewsPage() {
  const path = usePathname();
  const [news, setNews] = useState<INews | null>();

  useEffect(() => {
    async function fetch() {
      setNews(await getNews(path));
    }

    fetch();
  }, []);

  return (
    <div>
      <div>
        <MarkdownPage source={news?.content || "# 404 | Not found"} />
      </div>
    </div>
  );
}
