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
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";

enum NavLink {
  Technology,
  Service,
  Projects,
  ScientificResearch,
  Equipment,
  Documents,
  News,
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isTechnology, setIsTechnology] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isScientificResearch, setIsScientificResearch] = useState(false);
  const [isEquipment, setIsEquipment] = useState(false);
  const [isDocuments, setIsDocuments] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const element = container.current as any;

      if (element.scrollTop > 0 && window.innerWidth > 1300) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    }
    document.body.addEventListener("scroll", handleScroll, { passive: true, capture: true});
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    }
}, []);

  const closeOtherLinks = (active: NavLink) => {
    if (active !== NavLink.Technology) {
      setIsTechnology(false);
    }
    if (active !== NavLink.Service) {
      setIsService(false);
    }
    if (active !== NavLink.Projects) {
      setIsProjects(false);
    }
    if (active !== NavLink.ScientificResearch) {
      setIsScientificResearch(false);
    }
    if (active !== NavLink.Equipment) {
      setIsEquipment(false);
    }
    if (active !== NavLink.Documents) {
      setIsDocuments(false);
    }
  };

  const openLink = (link: NavLink, value: boolean | undefined = undefined) => {
    closeOtherLinks(link);

    switch (link) {
      case NavLink.Technology:
        setIsTechnology((prev) => value || !prev);
        break;
      case NavLink.Service:
        setIsService((prev) => value || !prev);
        break;
      case NavLink.Projects:
        setIsProjects((prev) => value || !prev);
        break;
      case NavLink.ScientificResearch:
        setIsScientificResearch((prev) => value || !prev);
        break;
      case NavLink.Equipment:
        setIsEquipment((prev) => value || !prev);
        break;
      case NavLink.Documents:
        setIsDocuments((prev) => value || !prev);
        break;
      default:
        break;
    }
  };

  return (
    <div className={s.container} ref={container}>
      <header className={`${s.header} ${isBlur ? s.blur : ""}`}>
        <div className={s.logo}>
          <Image alt="logo" src="/logo.png" width={50} height={44} />
        </div>
        <nav className={s.navigation}>
          <div className={`${s.link} ${isTechnology ? s.active : ""}`}>
            <p
              className={s.inner}
              onClick={() => openLink(NavLink.Technology)}
              onMouseOver={() => openLink(NavLink.Technology, true)}
            >
              Technology <ChevronDown strokeWidth={1} />
            </p>

            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.Technology, false)}
            >
              <Link href="#">Technology GPTS</Link>
              <Link href="#">Technology DBCI</Link>
              <Link href="#">Conferences GPTS</Link>
              <Link href="#">Conferences DBCI</Link>
              <Link href="#">About Company</Link>
              <Link href="#">Project Geography</Link>
              <Link href="#">Contacts</Link>
            </div>
          </div>
          <div className={`${s.link} ${isService ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Service)}
              onMouseOver={() => openLink(NavLink.Service, true)}
            >
              <Link href="#">Service</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.Service, false)}
            >
              <Link href="#">Exploration Oil & Gas</Link>
              <Link href="#">Engineering Survey</Link>
              <Link href="#">DSF-GEOS Monitoring</Link>
            </div>
          </div>
          <div className={`${s.link} ${isProjects ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Projects)}
              onMouseOver={() => openLink(NavLink.Projects, true)}
            >
              <Link href="#">Projects</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.Projects, false)}
            >
              <Link href="#">Projects</Link>
              <Link href="#">Conclusions</Link>
            </div>
          </div>
          <div className={`${s.link} ${isScientificResearch ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.ScientificResearch)}
              onMouseOver={() => openLink(NavLink.ScientificResearch, true)}
            >
              <Link href="#">Scientific research</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.ScientificResearch, false)}
            >
              <Link href="#">Study of The Earth</Link>
              <Link href="#">Study of The Antarctic Region</Link>
              <Link href="#">Laboratory Testing</Link>
            </div>
          </div>
          <div className={`${s.link} ${isEquipment ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Equipment)}
              onMouseOver={() => openLink(NavLink.Equipment, true)}
            >
              <Link href="#">Equipment</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.Equipment, false)}
            >
              <Link href="#">Measurement Techniques</Link>
              <Link href="#">Scanner DSF</Link>
              <Link href="#">Metrology</Link>
            </div>
          </div>
          <div className={`${s.link} ${isDocuments ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Documents)}
              onMouseOver={() => openLink(NavLink.Documents, true)}
            >
              <Link href="#">Documents</Link>
              <ChevronDown strokeWidth={1} />
            </div>

            <div
              className={s.links}
              onMouseLeave={() => openLink(NavLink.Documents, false)}
            >
              <Link href="#">Patents</Link>
              <Link href="#">Licenses</Link>
              <Link href="#">Certificates</Link>
              <Link href="#">Publications</Link>
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
              <div className={s.inner}>
                <Link href="#">Technology</Link>
                <ChevronDown strokeWidth={1} />
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
