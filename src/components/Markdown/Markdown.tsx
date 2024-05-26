import MDEditor from "@uiw/react-md-editor"
import s from "./Markdown.module.sass";

function Markdown({source}: {source: string}) {
  return (
    <MDEditor.Markdown className={s.markdown} source={source} />
  )
}

export default Markdown