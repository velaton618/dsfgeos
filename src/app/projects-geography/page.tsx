import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

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
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
