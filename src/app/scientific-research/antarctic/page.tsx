import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: Study of The antarctic Region

<p style="text-align: center;">
    <a href="https://dsfgeos.cn/files/Conference%20Scientific%20research%20in%20Antarctica-2006.pdf">III International Conference "Scientific research in Antarctica"</a>
</p>

<p style="text-align: center;">
    <a href="https://dsfgeos.cn/files/UAJ_N_8_171-185_2009.pdf">ELECTRODYNAMICS OF TECTONICS PROCESSES AND ELECTROMAGNETIC</a</p>

<p style="text-align: center;">
    <a href="https://dsfgeos.cn/files/UAJ_N_8_171-185_2009.pdf">OF THE EARTH CRUST IN ANTARCTIC REGION ON THE VERNADSKY STATION</a>
</p>

<video width="100%" height="100%" controls>
	<source src="/scientific-research/antarctic/video.mp4" type="video/mp4">
</video>

![image](/scientific-research/antarctic/1.jpeg)
![image](/scientific-research/antarctic/2.jpeg)
![image](/scientific-research/antarctic/3.webp)

`;

function Page() {
    return (
        <MarkdownPage source={source} />
    );
}

export default Page;
