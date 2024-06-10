import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: Licenses

![img](/documents/licenses/1.jpeg)
![img](/documents/licenses/2.jpeg)
![img](/documents/licenses/3.jpeg)
`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
