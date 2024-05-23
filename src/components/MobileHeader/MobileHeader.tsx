import { ChevronDown, Search } from "lucide-react";
import React from "react";
import s from "./MobileHeader.module.sass";
import Image from "next/image";
import Link from "next/link";

function MobileHeader({
  isMenuOpen
}: {
  isMenuOpen: boolean;
}) {
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
  );
}

export default MobileHeader;
