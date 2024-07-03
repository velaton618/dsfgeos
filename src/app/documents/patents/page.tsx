import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: Patents

![image](/documents/patents/1.webp)
![image](/documents/patents/2.webp)
![image](/documents/patents/3.jpeg)
![image](/documents/patents/12.jpeg)
![image](/documents/patents/4.jpeg)
![image](/documents/patents/5.webp)
![image](/documents/patents/14.jpeg)
!![image](/documents/patents/13.jpeg)
[image](/documents/patents/6.jpeg)
![image](/documents/patents/7.jpeg)
![image](/documents/patents/8.jpeg)
![image](/documents/patents/9.jpeg)
![image](/documents/patents/10.jpeg)
![image](/documents/patents/11.jpeg)
`;

function Page() {
  return <MarkdownPage source={source} />;
}

export default Page;
