import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

const source = `
# Engineering and Geological Survey with DSF-GEOS

![Engineering Survey](https://dsfgeos.com/img/engineering_survey.jpg)

## Introduction

Engineering and geological surveys play a crucial role in understanding subsurface structures and assessing the conditions for various construction projects. DSF-GEOS employs advanced techniques and methodologies to conduct comprehensive surveys for a wide range of purposes.

## Objectives

- Determine boundaries of soil layers and rock formations.
- Identify fractures, tectonic zones, and karst features.
- Study engineering geological processes and changes.
- Evaluate stress and deformation of buildings and structures.
- Assess soil conditions and characteristics.
- Identify infiltration paths and deformation zones.

## Survey Methodologies

DSF-GEOS utilizes a variety of survey methodologies to achieve its objectives:

1. **Boundary Determination:** Establish boundaries of soil layers and rock formations using advanced techniques.
2. **Fracture and Stress Analysis:** Identify fractures, tectonic zones, and assess stress states of target bodies.
3. **Karst Studies:** Investigate karst features, including water content, soluble rock layers, and fractures.
4. **Hydrogeological Survey:** Determine migration paths of groundwater, particularly in fractured formations.
5. **Geotechnical Survey:** Evaluate stress and deformation of structures, assess soil conditions, and identify deformation zones.
6. **Monitoring Hazardous Geodynamic Events:** Diagnose stability of structures, monitor high water surges, and identify areas prone to geological hazards.

## Case Study: Geopolariton Tomography in Shaanxi, China

![img](/engineering_survey/1.webp)
![img](/engineering_survey/2.webp)
![img](/engineering_survey/3.webp)
DSF-GEOS utilizes Geopolariton Tomography based on UAVs to explore and monitor subsurface structures in coalfields in Shaanxi, China. This advanced technology enhances the understanding of subsurface conditions, aiding in efficient and safe coal mining operations.

## Conclusion

Engineering and geological surveys are essential for assessing subsurface conditions and ensuring the safety and efficiency of construction projects. DSF-GEOS employs cutting-edge technologies and methodologies to provide accurate and reliable survey data, contributing to the success of various projects worldwide.

<video width="100%" height="100%" controls>
	<source src="/engineering_survey/video.mp4" type="video/mp4">
</video>
`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
