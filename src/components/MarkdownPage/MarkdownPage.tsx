'use client'

import s from "./MarkdownPage.module.sass";
import Header from "../Header/Header";
import { useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";
import Markdown from "../Markdown/Markdown";

function MarkdownPage({source}: {source: string}) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={s.container}>
      <MobileHeader isMenuOpen={menu} setIsMenuOpen={setMenu} />
      <Header isMenuOpen={menu} setIsMenuOpen={setMenu} isLight={true}/>
      <Markdown source={source}/>
    </div>
  )
}

export default MarkdownPage