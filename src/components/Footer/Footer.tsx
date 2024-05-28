import React from "react";
import s from "./Footer.module.sass";
import Image from "next/image";

function Footer() {
  return (
    <footer className={s.footer}>
      <Image alt="logo" width={50} height={50} src={"/logo2.png"} unoptimized />
      <div className={s.text}>
        <div className={s.info}>
          <p>Email: geopolariton@dsfgeos.cn</p>
          <p>Adress: China, Hebei, Zhangjiakou</p>
        </div>
        <p className={s.copyright}>
          © Copyright 2019-{new Date().getFullYear()}, Hebei DSF-GEOS Technology
          Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
