"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# Exploration of Oil & Gas Resources with DSF-GEOS

## Introduction

Exploration of mineral resources, particularly oil and gas, is a crucial endeavor that involves studying deep underground structures to determine the potential of hydrocarbons. DSF-GEOS utilizes advanced technologies to enhance the accuracy and efficiency of exploration processes.

## Objectives

- Study deep underground structures and determine hydrocarbon potential.
- Proofread geological formations for oil and gas fields.
- Determine direct signs of hydrocarbons and establish structural diagrams.
- Prioritize potential targets for further exploration.
- Recommend locations for exploration wells in potential areas.

## Utilizing GPTS Technology

DSF-GEOS employs GPTS technology to explore the deep structure and prospects of oil and gas potential in various regions. One notable example is the "Mezhdurechenskaya" area on the northeastern side of the Ferghana Basin.

## Stages of Aerogeophysical Works

Aerogeophysical works with the GPTS method involve several stages:

[img](/exploration_oil_gas/1.webp)
1. **Preliminary Survey**
2. **Install Detector on Aircraft**
3. **Upload Data to Server**
4. **Generate Stress Zones**

![img](/exploration_oil_gas/2.webp)
![img](/exploration_oil_gas/3.webp)

## Conclusion

Exploration of oil and gas resources is a complex yet essential process for meeting energy demands. DSF-GEOS, with its expertise and advanced technologies, plays a vital role in enhancing exploration accuracy and efficiency, contributing to the sustainable development of energy resources.

<video width="100%" height="100%" controls>
	<source src="/exploration_oil_gas/video.mp4" type="video/mp4">
</video>
`;

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isLight={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default Page;
