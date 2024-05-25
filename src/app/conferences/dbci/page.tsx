"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
# Conferences - DBCI

## Table of Contents

1. [Conferences](#conferences)
##  Conferences

	`;

function ConferencesGPTS() {
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

export default ConferencesGPTS;
