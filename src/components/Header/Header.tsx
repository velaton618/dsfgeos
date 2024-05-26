'use client'

import { useState } from "react";
import s from "./Header.module.sass";
import { NavLink } from "@/models/NavLink";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [selectedLink, setSelectedLink] = useState(NavLink.None);

  return (
    <header className={`${s.header}`}>
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
            onMouseOver={() => setSelectedLink(NavLink.Service)}
          >
            <Link href="#">Service</Link>
            <ChevronDown strokeWidth={1} />
          </div>
          <div
            className={s.links}
            onMouseLeave={() => setSelectedLink(NavLink.None)}
          >
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
            onMouseOver={() => setSelectedLink(NavLink.Projects)}
          >
            <Link href="#">Projects</Link>
            <ChevronDown strokeWidth={1} />
          </div>
          <div
            className={s.links}
            onMouseLeave={() => setSelectedLink(NavLink.None)}
          >
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
            onMouseOver={() => setSelectedLink(NavLink.ScientificResearch)}
          >
            <Link href="#">Scientific research</Link>
            <ChevronDown strokeWidth={1} />
          </div>
          <div
            className={s.links}
            onMouseLeave={() => setSelectedLink(NavLink.None)}
          >
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
            onMouseOver={() => setSelectedLink(NavLink.Equipment)}
          >
            <Link href="#">Equipment</Link>
            <ChevronDown strokeWidth={1} />
          </div>
          <div
            className={s.links}
            onMouseLeave={() => setSelectedLink(NavLink.None)}
          >
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
            onMouseOver={() => setSelectedLink(NavLink.Documents)}
          >
            <Link href="#">Documents</Link>
            <ChevronDown strokeWidth={1} />
          </div>

          <div
            className={s.links}
            onMouseLeave={() => setSelectedLink(NavLink.None)}
          >
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
      <div className={s.search}>
        <input placeholder="Search..." />
        <Search className={s.icon} strokeWidth={1} />
      </div>
    </header>
  );
}

export default Header;
