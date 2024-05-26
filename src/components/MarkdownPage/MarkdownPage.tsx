'use client'

import s from "./MarkdownPage.module.sass";
import Markdown from "../Markdown/Markdown";

function MarkdownPage({source}: {source: string}) {
  return (
    <div className={s.container}>
      <Markdown source={source}/>
    </div>
  )
}

export default MarkdownPage