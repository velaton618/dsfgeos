"use client";

import { BASE_URL } from "@/$api";
import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const [content, setContent] = useState("");
  const path = usePathname();

  useEffect(() => {
    async function getPage() {
      const response = await fetch(`${BASE_URL}/pages`);
      const data = await response.json();

      if (data.docs) {
        data.docs.map((p: any) => {
					if (p.path === path) {
						setContent(p.content);
					}
				})
      }
    }

    getPage();
  }, []);
  
  return <MarkdownPage source={content} />;
}

export default Page;
