import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

const source = `
# Technology - GPTS

<video width="100%" height="100%" controls>
	<source src="/gpts/video.mp4" type="video/mp4">
</video>

## Passive Source Electromagnetic Geophysical Exploration Technology - GPTS

GPTS (GeoPolariton Tomographic System) is a passive source electromagnetic geophysical exploration technology. It can be applied to various fields, including mineral resources exploration (such as deep-sea oil and gas), engineering geological surveys, hydrogeological surveys, geothermal geological surveys, geotechnical surveys, disaster and environmental monitoring, and deep space exploration.

## Table of Contents

1. [What is GPTS Technology?](#what-is-gpts-technology)
2. [Applications of GPTS Technology](#applications-of-gpts-technology)
3. [Advantages of GPTS Technology](#advantages-of-gpts-technology)

## What is GPTS Technology?

GPTS stands for GeoPolariton Tomographic System. It is a technology used for geophysical exploration that leverages passive source electromagnetic methods to explore the deep structure of the Earth's crust. This advanced technology helps in obtaining detailed images and data of subsurface formations, which is crucial for various geological and geophysical applications.

## Applications of GPTS Technology

GPTS technology has a wide range of applications, including:

- **Mineral Resources Exploration**: Useful in identifying and evaluating deposits of oil, gas, and other minerals.
- **Engineering Geological Survey**: Assists in understanding subsurface conditions for construction and engineering projects.
- **Hydrogeological Survey**: Helps in mapping groundwater resources.
- **Geothermal Geological Survey**: Identifies potential geothermal energy sources.
- **Geotechnical Survey**: Used in the analysis of soil and rock properties for construction purposes.
- **Disaster and Environmental Monitoring**: Monitors environmental changes and natural disasters.
- **Deep Space Exploration**: Aids in the study of geological formations beyond Earth.

## Advantages of GPTS Technology

- **Cost-Efficiency**: Reduces financial risks associated with geological exploration projects.
- **Rapid Evaluation**: Provides quick assessments of mineral resource potential, aiding in early decision-making.
- **Accurate Mapping**: Offers precise mapping of oil fields and natural gas deposits, facilitating better project planning and investment decisions.

![image](/gpts/image.jpg)
`;

function TechnologyGPTS() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default TechnologyGPTS;
