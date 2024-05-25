"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# DSF-GEOS: Project Geography

## COMPANIES INVOLVED IN THE PROJECTS

|   |   |   |
|---|---|---|
| ![1](/project-geography/1.webp) | ![2](/project-geography/2.webp) | ![3](/project-geography/3.webp) |
| ![4](/project-geography/4.webp) | ![5](/project-geography/5.webp) | ![6](/project-geography/6.webp) |


![main](/project-geography/main.webp)
`;

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} />
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default Page;
