"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# DSF-GEOS

![office](/about/office.webp)
<video width="50%" height="50%" controls>
<source src="/about/video-1.mp4" type="video/mp4">
</video>

## About

Hebei DSF-GEOS Technology Co., Ltd. (hereinafter referred to as: DSF-GEOS) was established on February 18, 2019, in September 2019 officially settled in Huailai, Hebei, Beijing, Tianjin and Hebei business incubation base. DSF-GEOS has independent proprietary technology: passive source electromagnetic geophysical exploration technology-GPTS (GeoPolariton Tomographic System), bio-electromagnetic technology-DBCI (Brains-Blood Coupling Interface) brain-blood coupling interface technology, spectrum analysis and diagnosis method-DSF (Diagnostic Sanogenesis Frequency) rehabilitation frequency diagnosis method. Is a scientific and technological innovation research and development and high-tech services-based Sino-foreign joint ventures, with Chinese and foreign researchers and complementary disciplines in the field of technology, the strength of the strong R & D team, and has independent research and development and manufacturing of the corresponding high-end equipment and software development capabilities.
DSF-GEOS was formerly known as the Ukrainian special aviation industry multi-sector airline“MAC \* SAI·, DSF-GEOS founding members of the ”MAC·SAI" original core team members. After 20 years of research and creation by researchers since the 1980s and “MAC·SAI” in the late 12 years of business history of passive source geophysical exploration technology, aviation technology and bio-electromagnetic technology continue to explore, explore, combine and practice, and ultimately for the creation of dis Jio and technological innovation and development has laid a solid scientific foundation.
Areas of application of DSF-GEOS know-how：
Passive source electromagnetic geophysical exploration technology -- GPTS (GeoPolariton Tomographic System)：
It can be used in mineral resources exploration (deep-sea oil and gas and other mineral resources), engineering geological survey, hydrogeological survey, geothermal geological survey, geotechnical survey, disaster and environmental monitoring and deep space exploration and other fields.
Combined with the call to encourage the actual policy, only this technology can contribute in deep space exploration, ecological wisdom mines, wisdom cities, science and technology Olympics and many other fields：

### 1. Deep space exploration：

1. exploration of deep and deep sea geological formations and Mineral Resources；
2. perspective study on Moho face, mantle and core；
3. the use of satellite equipment, can carry out deep space research, such as the Earth, the moon and other celestial bodies internal structure and stress characteristics and other aspects of the detection and Research; black holes, gravitational wave detection and research.

### 2. Ecological wisdom mine：

1. can detect the mine goaf, accurately give the goaf in the underground space positioning;can monitor the mine stress changes, predict the risk of goaf collapse; to detect and monitor changes in mine groundwater sources；
2. Mine Safety prediction and monitoring of coal mines and other mines (such as high water surge area detection, impact mine pressure-Rock Burst prediction and monitoring, gas outburst prediction and monitoring, etc）；
3. to monitor the migration path of harmful substances underground leakage of harmful minerals piling and storage sites, to prevent groundwater pollution, and correct the harmful minerals piling sites.

### 3. Smart city：

1. prediction and real-time monitoring of possible natural disasters in the city from the root cause, such as earthquakes, mudslides,landslides,karst karst collapse(surface collapse), etc., can be long-term forecast of the disaster (year), medium-term forecast (month), short-term forecast (week) and direct forecast(hours to days)；
2. to detect and monitor the fracture, collapse, penetration, deformation and other security risks of reservoirs, dams, bridges and tunnels in the city；
3. to assess the stress deformation state of buildings, large building structures and ancient architectural monuments, and can detect and monitor building safety；
4. safety testing and monitoring of urban large pipeline systems, such as drainage pipes,pressure lines (thermal pipes, oil and gas pipelines, etc)；
5. urban groundwater resources exploration,water level change,migration trajectory detection；
6. urban geothermal resources exploration；
7. archaeological exploration of underground ruins,detection of underground rammed earth anomalies, passages and tombs；
8. high voltage transmission network by lightning area detection；
9. determine the regional scope of the adverse effects of electromagnetic fields on biological organisms in cities and assess regional pathogenicity；
10. detection of infiltration paths that may cause groundwater pollution when hazardous chemicals and substances leak；
11. selection of high-quality agricultural land and selection of the most suitable areas for crop growth in arable land (based on the impact of the Earth's pulsed electromagnetic field environment on vegetation）

### The combination of these fields and big data can provide technical support and guarantee for the construction of a full range of smart cities in terms of resources, environment and security.

#### The advantages of this technology are：

• The ability to discover aquifers (water), oil, gas and other minerals and monitor their movement;and the ability to detect deposits at any depth without depth restrictions；

• The biggest feature and advantage of technology is that it can give direct signs of oil and gas (hydrocarbons), so that the regional overview work more accurate and faster; in the detailed investigation and evaluation stage can be done “no oil and gas structure,no structure oil and gas " results；

• Without terrain restrictions, can be used on land, sea, swamps, mountains, deserts and areas difficult to carry out normal traditional exploration; the technology is a passive source exploration technology, without excitation source, without any damage or impact on the environment；

• High speed and high mobility, the instrument is compact and lightweight,can be used pedestrian, automobile, ship, aircraft and satellite to carry the instrument, for example, each UAV can collect up to 800-1000 km of data per day, can complete a large area of data collection work in a short time；

• Data processing interpretation, can provide 2D,3D,4D (evolution on the timeline) interpretation results；

• Effective detection of structural faults；

• Can be more accurate to complete the traditional exploration work is difficult to give accurate results (such as salt structure, vertical fracture, etc.）；

• Can be used at all stages of geological-geophysical search and exploration；

• Compared with effective traditional geophysical methods can significantly reduce the number of drilling, thereby significantly reducing exploration and investment costs；

• Can be used independently or in combination with other geophysical methods and can be used to reconfirm old traditional exploration data results；
II. Bio-electromagnetic technology -- DBCI (Brains-Blood Coupling Interface) brain-blood coupling interface technology：
Is an application of technology in the direction of biological electromagnetic edge science, through the electromagnetic signal emitted by the organism spectrum analysis, in order to determine the physiological, pathological and even psychological changes in the state of the organism.Sensor and software analysis system has been successfully developed trial production, the ultimate goal is to apply it to the field of life safety testing and monitoring and artificial intelligence, such as passenger transport, high-speed rail, aircraft pilot fatigue and mental tension monitoring.
III. Spectrum analysis diagnostic method-DSF (Diagnostic Sanogenesis Frequency) rehabilitation frequency diagnostic method：
It is a method of diagnosing the state of each unit of the cardiovascular system.Can be used to find more information on the control status of each unit of the cardiovascular system in response to ECG signals.Such as through the ECG spectrum analysis, can be found in myocardial infarction,stroke precursors, and even can be used to detect virus infection and latent (such as COVID-19 virus). At present, a cooperation agreement has been signed with the National Academy of Sciences of Ukraine, the new Crown virus (COVID-19) infection and latent detection experiments are being carried out.
DSF-GEOS in line with the latest promulgated by the state to encourage foreign investment in the industry directory, geophysical exploration and biomedical and other fields to encourage many conditions.And has obtained the Provincial Science and technology SME certificate issued by the Hebei Provincial Department of Science and technology, and has been stored in 2019 and 2020 National Science.

## COMPANY PREDECESSOR HISTORY

### COMPANY "STC GEOINDUSTRIYA"

<video width="100%" height="100%" controls>
	<source src="/about/video-2.mp4" type="video/mp4">
</video>

### COMPANY "MAC•SAI"

<video width="100%" height="100%" controls>
	<source src="/about/video-3.mp4" type="video/mp4">
</video>

`;

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} />
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default About;
