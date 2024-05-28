import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS | Study of The Earth

## Operational Forecast of Earthquake precursors
<video width="100%" height="100%" controls>
	<source src="/scientific-research/earth/video.mp4" type="video/mp4">
</video>

## GEOPHYSICAL INFORMATION ELECTRONIC RESOURCE
![img](/scientific-research/earth/1.webp)
![img](/scientific-research/earth/2.webp)
![img](/scientific-research/earth/3.webp)

## REGIONAL STUDIES OF THE SOUTH-EASTERN PART OF THE CASPIAN BASIN
![img](/scientific-research/earth/4.webp)

## REGIONAL STUDIES OF THE CENTRAL ASIAN FOLD BELT
![img](/scientific-research/earth/5.webp)

## STUDY OF THE DEEP STRUCTURE OF TURFAN AND DATONG VOLCANOES BY GPTS METHOD,CHINA
![img](/scientific-research/earth/6.webp)
`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
