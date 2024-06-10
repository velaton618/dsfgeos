import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS Labaratory Testing

<p style="text-align: center;">
    LABORATORY TESTING WAS CONDUCTED WITH THE SUPPORT OF THE
    <br> 
    CHANGSHA URANIUM GEOLOGY RESEARCH INSTITUTE, CNNC
</p>

<img src="/scientific-research/laboratory-testing/1.jpeg" style="width: auto;"/>

<video width="100%" height="100%" controls>
	<source src="/scientific-research/antarctic/video.mp4" type="video/mp4">
</video>

## METHODS AND EQUIPMENT
![image](/scientific-research/laboratory-testing/2.webp)
![image](/scientific-research/laboratory-testing/3.webp)

## SPECTRUM OF ELECTROMAGNETIC RADIATION SAMPLES
![image](/scientific-research/laboratory-testing/4.webp)

## THE RESULTS OF LABORATORY STUDIES
![image](/scientific-research/laboratory-testing/5.webp)
`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
