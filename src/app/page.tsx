"use client";

import Image from "next/image";
import s from "./page.module.sass";
import {
  Search,
  ChevronDown,
  Hourglass,
  MountainIcon,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.logo}>
          <Image alt="logo" src="/logo.png" width={50} height={44} />
        </div>
        <nav className={s.navigation}>
          <div className={s.link}>
            <p className={s.inner}>
              Technology <ChevronDown strokeWidth={1} />
            </p>

            <div className={s.links}>
              <Link href="#">Technology GPTS</Link>
              <Link href="#">Technology DBCI</Link>
              <Link href="#">Conferences GPTS</Link>
              <Link href="#">Conferences DBCI</Link>
              <Link href="#">About Company</Link>
              <Link href="#">Project Geography</Link>
              <Link href="#">Contacts</Link>
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="#">Service</Link>
              <ChevronDown strokeWidth={1} />
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="#">Projects</Link>
              <ChevronDown strokeWidth={1} />
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="#">Scientific research</Link>
              <ChevronDown strokeWidth={1} />
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="#">Equipment</Link>
              <ChevronDown strokeWidth={1} />
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="#">Documents</Link>
              <ChevronDown strokeWidth={1} />
            </div>
          </div>
          <div className={s.link}>
            <Link href="#">News</Link>
          </div>
        </nav>
        <div className={s.search}>
          <input placeholder="Search..." />
          <Search className={s.icon} strokeWidth={1} />
        </div>
        <button
          className={s.menuBtn}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>
      <div className={`${s.mobileHeader} ${isMenuOpen ? s.active : ""}`}>
        <div className={s.background} />
        <div className={s.content}>
          <div className={s.logo}>
            <Image alt="logo" src="/logo.png" width={50} height={44} />
          </div>
          <div className={s.search}>
            <input placeholder="Search..." />
            <Search className={s.icon} strokeWidth={1} />
          </div>
          <nav className={s.navigation}>
            <div className={s.link}>
              <Link href="#">Technology</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <Link href="#">Service</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <Link href="#">Projects</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <Link href="#">Scientific research</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <Link href="#">Equipment</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <Link href="#">Documents</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.link}>
              <div className={s.inner}>
                <Link href="#">News</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
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
      <div className={s.spacer} id="first-section" />
      <section className={s.time}>
        <Image
          alt="time"
          src={"/time.png"}
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
      <div className={s.spacer} />
      <section className={s.mineral}>
        <div className={s.background}>
          <Image
            alt="mountains-top"
            src={"/mountains.png"}
            width={100}
            height={100}
            className={s.imageUp}
            layout="responsive"
          />
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
      <footer className={s.footer}>
        <Image alt="logo" width={48} height={48} src={"/logo.png"} />
        <div className={s.text}>
          <div className={s.info}>
            <p>Email: geopolariton@dsfgeos.cn</p>
            <br />
            <p>Adress: China, Hebei, Zhangjiakou, 河北帝斯杰奥科技有限公司</p>
          </div>
          <p className={s.copyright}>
            © Copyright 2019-{new Date().getFullYear()}, Hebei DSF-GEOS
            Technology Co., Ltd. All rights reserved.
          </p>
        </div>
        <Image alt="logo" width={48} height={48} src={"/logo2.png"} />
      </footer>
    </div>
  );
}
