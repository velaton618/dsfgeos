import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: Certificates

![img](/documents/certificates/1.jpeg)
![img](/documents/certificates/2.jpeg)
![img](/documents/certificates/3.jpeg)
![img](/documents/certificates/4.webp)
![img](/documents/certificates/5.webp)
![img](/documents/certificates/6.webp)
![img](/documents/certificates/7.webp)
![img](/documents/certificates/8.webp)

`;

function Page() {
  return <MarkdownPage source={source} />;
}

export default Page;
