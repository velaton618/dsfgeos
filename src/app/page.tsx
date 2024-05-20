import Image from "next/image";
import s from "./page.module.sass";
import { Search, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.logo}>
          <Image alt="logo" src="/logo.png" width={50} height={44} />
        </div>
        <nav className={s.navigation}>
          <div className={s.link}>
            <a href="#">Technology</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">Service</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">Projects</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">Scientific research</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">Equipment</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">Documents</a>
            <ChevronDown strokeWidth={1} />
          </div>
          <div className={s.link}>
            <a href="#">News</a>
          </div>
        </nav>
        <div className={s.search}>
          <input placeholder="Search..." />
          <Search className={s.icon} strokeWidth={1} />
        </div>
      </header>
      <div className={s.content}>
        <div className={s.text}>
          <h1 className={s.title}>Hebei DSF-GEOS Technology Co., Ltd</h1>
          <h2 className={s.description}>
            Hebei DSF-GEOS Technology Co., Ltd is a lorem company that helps the
            ipsum for their helpful decisions
          </h2>
        </div>
        <div className={s.icon}>
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
        </div>
      </div>
    </div>
  );
}
