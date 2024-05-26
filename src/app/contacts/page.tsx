import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

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
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
