"use client";

import Image from "next/image";
import s from "./page.module.sass";
import { Hourglass, MountainIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={s.container}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} />
      <section className={s.main}>
        <div className={s.text}>
          <h1 className={s.title}>
            Hebei DSF-GEOS
            <br />
            Technology Co., Ltd
          </h1>
          <h2 className={s.description}>
            Unveiling Earth's Hidden Treasures: Revolutionize Exploration with
            GPTS Technology
          </h2>
        </div>
        <Link className={s.icon} href="#first-section">
          <svg
            width="46"
            height="25"
            viewBox="0 0 46 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L23 23.5L45 1.5"
              stroke="#E7E7E7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>
      <section className={s.time} id="first-section">
        <Image
          alt="time"
          src={"/time.jpg"}
          width={100}
          height={100}
          className={s.image}
        />
        <div className={s.text}>
          <h1 className={s.title}>
            Save time
            <Hourglass size={32} />
          </h1>
          <p className={s.description}>
            USING THE "GPTS" TECHNOLOGY WILL ALLOW IN A MINIMUM TIME  TO
            DRASTICALLY LESSEN ALL FINANCIAL RISKS OF PROJECT WHILE CONFIRMING
            DEPOSITS OF CARBOHYDRONS
          </p>
        </div>
      </section>
      <section className={s.mineral}>
        <div className={s.background}>
          <Image
            alt="mountains-bottom"
            src={"/mountains.png"}
            width={100}
            height={100}
            layout="responsive"
            className={s.imageDown}
          />
        </div>
        <div className={s.text}>
          <h1 className={s.title}>
            <MountainIcon size={32} />
            Early Mineral insights
          </h1>
          <p className={s.description}>
            GETTING EXPRESS EVALUATION OF PERSPECTIVES OF MINERAL RESOURCES
            DEVELOPMENT ON EARLY STAGES OF GEOLOGICAL AND GEOPHYSICAL WORKS WILL
            HELP IN ADOPTING RIGHT DECISION
          </p>
        </div>
      </section>
      <section className={s.investment}>
        <div className={s.text}>
          <h1 className={s.title}>Clearer Investments</h1>
          <p className={s.description}>
            HAVING MAPS OF OIL FIELDS AND DEPOSITS OF NATURAL GASSES MARKED ON A
            MAP WILL ALLOW US TO MAKE A CLEARER JUDGEMENT WHEN ASSESSING THE
            PROJECT AND HOW MUCH INVESTMENT INTO THE PROJECT IS REQUIRED
          </p>
        </div>
        <Image
          alt="oil field"
          src={"/oil.png"}
          width={100}
          height={100}
          className={s.image}
        />
      </section>
      <Footer />
    </div>
  );
}
