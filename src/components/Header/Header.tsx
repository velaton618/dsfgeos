import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.sass";
import { NavLink } from "@/models/NavLink";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

function Header({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isTechnology, setIsTechnology] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isScientificResearch, setIsScientificResearch] = useState(false);
  const [isEquipment, setIsEquipment] = useState(false);
  const [isDocuments, setIsDocuments] = useState(false);

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
    <header className={s.header}>
      <div className={s.logo}>
        <Link href={"/"}>
        <Image alt="logo" src="/logo.png" width={50} height={44} />
        </Link>
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
            <Link href="/technology/gpts">Technology GPTS</Link>
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
  );
}

export default Header;
