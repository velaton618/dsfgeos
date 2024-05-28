'use client'

import { ChevronDown, Menu, Search, X } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./MobileHeader.module.sass";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/models/NavLink";
import { usePathname } from "next/navigation";

function MobileHeader() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [path]);

  const [selectedLink, setSelectedLink] = useState(NavLink.None)

  return (
    <>
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
                <div className={`${s.link} ${selectedLink === NavLink.Technology ? s.active : ""}`}>
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
                <div className={`${s.link} ${selectedLink === NavLink.Service ? s.active : ""}`}>
                  <div className={s.inner} onClick={() => setSelectedLink(NavLink.Service)}>
                    <Link href="#">Service</Link>
                    <ChevronDown strokeWidth={1} />
                  </div>
                  <div className={s.links}>
                    <Link href="/exploration-oil-gas">Exploration Oil & Gas</Link>
                    <Link href="/engineering-survey">Engineering Survey</Link>
                    <Link href="/monitoring">DSF-GEOS Monitoring</Link>
                  </div>
                </div>
                <div className={`${s.link} ${selectedLink === NavLink.Projects ? s.active : ""}`}>
                  <div className={s.inner} onClick={() => setSelectedLink(NavLink.Projects)}>
                    <Link href="#">Projects</Link>
                    <ChevronDown strokeWidth={1} />
                  </div>
                  <div className={s.links}>
                    <Link href="#">Projects</Link>
                    <Link href="#">Conclusions</Link>
                  </div>
                </div>
                <div className={`${s.link} ${selectedLink === NavLink.ScientificResearch ? s.active : ""}`}>
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
                <div className={`${s.link} ${selectedLink === NavLink.Equipment ? s.active : ""}`}>
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
                <div className={`${s.link} ${selectedLink === NavLink.Documents ? s.active : ""}`}>
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
<div className={`${s.mobileHeader} ${isMenuOpen ? s.active : ""} ${path !== "/" ? s.dark : s.light}`}>
      <button
        className={s.menuBtn}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </div>
    </>

  );
}

export default MobileHeader;
