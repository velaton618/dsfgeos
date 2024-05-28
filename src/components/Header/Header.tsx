"use client";

import { useEffect, useState } from "react";
import s from "./Header.module.sass";
import { NavLink } from "@/models/NavLink";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [selectedLink, setSelectedLink] = useState(NavLink.None);
  const [isBlured, setIsBlured] = useState(false);

  useEffect(() => {
    const scrollEvent: any = window.addEventListener("scroll", (e: Event) => {
      if (window.scrollY >= 100) {
        setIsBlured(true);
      } else {
        setIsBlured(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setSelectedLink(NavLink.None);
    }
  }, [path]);

  return (
    <div>
      <header className={`${s.header} ${isBlured ? s.blur : ""}`}>
        <div className={s.logo}>
          <Link href={"/"}>
            <Image alt="logo" src="/logo.png" width={50} height={44} />
          </Link>
        </div>
        <nav className={s.navigation}>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.Technology ? s.active : ""
            }`}
          >
            <p
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.Technology)}
              onMouseOver={() => setSelectedLink(NavLink.Technology)}
            >
              Technology <ChevronDown strokeWidth={1} />
            </p>

            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/technology/gpts">Technology GPTS</Link>
              <Link href="/technology/dbci">Technology DBCI</Link>
              <Link href="/technology/conferences/gpts">Conferences GPTS</Link>
              <Link href="/technology/conferences/dbci">Conferences DBCI</Link>
              <Link href="/technology/about">About Company</Link>
              <Link href="/technology/projects-geography">Project Geography</Link>
              <Link href="/technology/contacts">Contacts</Link>
            </div>
          </div>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.Service ? s.active : ""
            }`}
          >
            <div
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.Service)}
              onMouseOver={() => setSelectedLink(NavLink.Service)}
            >
              Service
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/service/exploration-oil-gas">Exploration Oil & Gas</Link>
              <Link href="/service/engineering-survey">Engineering Survey</Link>
              <Link href="/service/monitoring">DSF-GEOS Monitoring</Link>
            </div>
          </div>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.Projects ? s.active : ""
            }`}
          >
            <div
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.Projects)}
              onMouseOver={() => setSelectedLink(NavLink.Projects)}
            >
              Projects
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/projects/projects">Projects</Link>
              <Link href="/projects/conclusions">Conclusions</Link>
            </div>
          </div>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.ScientificResearch ? s.active : ""
            }`}
          >
            <div
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.ScientificResearch)}
              onMouseOver={() => setSelectedLink(NavLink.ScientificResearch)}
            >
              Scientific research
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/scientific-research/earth">Study of The Earth</Link>
              <Link href="/scientific-research/antarctic">Study of The Antarctic Region</Link>
              <Link href="/scientific-research/labaratory-testing">Laboratory Testing</Link>
            </div>
          </div>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.Equipment ? s.active : ""
            }`}
          >
            <div
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.Equipment)}
              onMouseOver={() => setSelectedLink(NavLink.Equipment)}
            >
              Equipment
              <ChevronDown strokeWidth={1} />
            </div>
            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/equipment/measurement">Measurement Techniques</Link>
              <Link href="/equipment/dsf-scanner">Scanner DSF</Link>
              <Link href="/equipment/metrology">Metrology</Link>
            </div>
          </div>
          <div
            className={`${s.link} ${
              selectedLink === NavLink.Documents ? s.active : ""
            }`}
          >
            <div
              className={s.inner}
              onClick={() => setSelectedLink(NavLink.Documents)}
              onMouseOver={() => setSelectedLink(NavLink.Documents)}
            >
              Documents
              <ChevronDown strokeWidth={1} />
            </div>

            <div
              className={s.links}
              onMouseLeave={() => setSelectedLink(NavLink.None)}
            >
              <Link href="/documents/patents">Patents</Link>
              <Link href="/documents/licenses">Licenses</Link>
              <Link href="/documents/certificates">Certificates</Link>
              <Link href="/documents/publications">Publications</Link>
            </div>
          </div>
          <div className={s.link}>
            <div className={s.inner}>
              <Link href="/news">News</Link>
            </div>
          </div>
        </nav>
        <div className={s.search}>
          <input placeholder="Search..." />
          <Search className={s.icon} strokeWidth={1} />
        </div>
      </header>
      <div className={s.mobileHeader}>
        <div className={`${s.background} ${isMenuOpen ? s.active : ""}`} />
        <div className={`${s.content} ${isMenuOpen ? s.active : ""}`}>
          <div className={s.logo}>
            <Link href={"/"}>
              <Image alt="logo" src="/logo.png" width={50} height={44} />
            </Link>
          </div>
          <div className={s.search}>
            <input placeholder="Search..." />
            <Search className={s.icon} strokeWidth={1} />
          </div>
          <nav className={s.navigation}>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.Technology ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.Technology)}
              >
                <Link href="#">Technology</Link>
                <ChevronDown strokeWidth={1} />
              </div>
              <div className={s.links}>
                <Link href="/technology/gpts">Technology GPTS</Link>
                <Link href="/technology/dbci">Technology DBCI</Link>
                <Link href="/conferences/gpts">Conferences GPTS</Link>
                <Link href="/conferences/dbci">Conferences DBCI</Link>
                <Link href="/about">About Company</Link>
                <Link href="/projects-geography">Project Geography</Link>
                <Link href="/contacts">Contacts</Link>
              </div>
            </div>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.Service ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.Service)}
              >
                <Link href="#">Service</Link>
                <ChevronDown strokeWidth={1} />
              </div>
              <div className={s.links}>
                <Link href="/exploration-oil-gas">Exploration Oil & Gas</Link>
                <Link href="/engineering-survey">Engineering Survey</Link>
                <Link href="/monitoring">DSF-GEOS Monitoring</Link>
              </div>
            </div>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.Projects ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.Projects)}
              >
                <Link href="#">Projects</Link>
                <ChevronDown strokeWidth={1} />
              </div>
              <div className={s.links}>
                <Link href="#">Projects</Link>
                <Link href="#">Conclusions</Link>
              </div>
            </div>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.ScientificResearch ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.ScientificResearch)}
              >
                <Link href="#">Scientific research</Link>
                <ChevronDown strokeWidth={1} />
              </div>
              <div className={s.links}>
                <Link href="#">Study of The Earth</Link>
                <Link href="#">Study of The Antarctic Region</Link>
                <Link href="#">Laboratory Testing</Link>
              </div>
            </div>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.Equipment ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.Equipment)}
              >
                <Link href="#">Equipment</Link>
                <ChevronDown strokeWidth={1} />
              </div>
              <div className={s.links}>
                <Link href="#">Measurement Techniques</Link>
                <Link href="#">Scanner DSF</Link>
                <Link href="#">Metrology</Link>
              </div>
            </div>
            <div
              className={`${s.link} ${
                selectedLink === NavLink.Documents ? s.active : ""
              }`}
            >
              <div
                className={s.inner}
                onClick={() => setSelectedLink(NavLink.Documents)}
              >
                <Link href="#">Documents</Link>
                <ChevronDown strokeWidth={1} />
              </div>

              <div className={s.links}>
                <Link href="#">Patents</Link>
                <Link href="#">Licenses</Link>
                <Link href="#">Certificates</Link>
                <Link href="#">Publications</Link>
              </div>
            </div>
            <div className={s.link}>
              <div className={s.inner}>
                <Link href="#">News</Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          className={`${s.mobileHeader} ${isMenuOpen ? s.active : ""} ${
            path !== "/" ? s.dark : s.light
          }`}
        >
          <button
            className={s.menuBtn}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
