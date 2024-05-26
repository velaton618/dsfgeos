"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# DSF-GEOS: Contacts

## Company Name CN
河北帝斯杰奥科技有限公司

## Company Name EN
Hebei DSF-GEOS Technology Co., Ltd

## Location
Zhangjiakou City, Hebei Province, China

![location](/contacts/location.jpeg)
![location2](/contacts/location-2.webp)
`;

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isLight={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default Page;
