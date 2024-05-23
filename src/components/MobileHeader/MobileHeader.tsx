import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";
import s from "./MobileHeader.module.sass";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/models/NavLink";

function MobileHeader({ isMenuOpen }: { isMenuOpen: boolean }) {
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
          <div className={`${s.link} ${isTechnology ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Technology)}
            >
              <Link href="#">Technology</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.links}>
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
            <div className={s.inner} onClick={() => openLink(NavLink.Service)}>
              <Link href="#">Service</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.links}>
              <Link href="#">Exploration Oil & Gas</Link>
              <Link href="#">Engineering Survey</Link>
              <Link href="#">DSF-GEOS Monitoring</Link>
            </div>
          </div>
          <div className={`${s.link} ${isProjects ? s.active : ""}`}>
            <div className={s.inner} onClick={() => openLink(NavLink.Projects)}>
              <Link href="#">Projects</Link>
              <ChevronDown strokeWidth={1} />
            </div>
            <div className={s.links}>
              <Link href="#">Projects</Link>
              <Link href="#">Conclusions</Link>
            </div>
          </div>
          <div className={`${s.link} ${isScientificResearch ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.ScientificResearch)}
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
          <div className={`${s.link} ${isEquipment ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Equipment)}
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
          <div className={`${s.link} ${isDocuments ? s.active : ""}`}>
            <div
              className={s.inner}
              onClick={() => openLink(NavLink.Documents)}
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
    </div>
  );
}

export default MobileHeader;
