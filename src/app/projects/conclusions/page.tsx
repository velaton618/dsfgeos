import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS | Projects Conclusions

![img](/projects/conclusions/1.jpeg)
![img](/projects/conclusions/2.webp)
![img](/projects/conclusions/3.webp)
![img](/projects/conclusions/4.webp)
![img](/projects/conclusions/5.webp)
![img](/projects/conclusions/6.webp)
![img](/projects/conclusions/7.webp)
![img](/projects/conclusions/8.webp)
![img](/projects/conclusions/9.webp)
![img](/projects/conclusions/10.webp)
![img](/projects/conclusions/11.webp)
![img](/projects/conclusions/12.webp)
![img](/projects/conclusions/13.webp)
![img](/projects/conclusions/14.webp)
![img](/projects/conclusions/15.webp)
`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
