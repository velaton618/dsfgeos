"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# MONITORING OF DANGEROUS GEODYNAMIC EVENTS

Monitoring of underground leakage migration path of hazardous substances in hazardous
mineral stacking and storage sites.

Determine the regional scope of adverse effects of electromagnetic fields
on organisms and assess regional pathogenicity

Monitor dangerous Geodynamic processes on the Earth
(e.g. earthquakes, tsunamis, volcanic activity, etc)

Monitoring of oil and gas pipelines

![img](/monitoring/1.webp)

## DSF-GEOS MONITORING NETWORK
![img](/monitoring/2.webp)
![img](/monitoring/3.webp)
![img](/monitoring/4.webp)
`;

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isLight={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default Page;
