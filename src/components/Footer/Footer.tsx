import React from "react";
import s from "./Footer.module.sass";
import Image from "next/image";

function Footer() {
  return (
    <footer className={s.footer}>
      <Image alt="logo" width={48} height={48} src={"/logo.png"} />
      <div className={s.text}>
        <div className={s.info}>
          <p>Email: geopolariton@dsfgeos.cn</p>
          <br />
          <p>Adress: China, Hebei, Zhangjiakou, 河北帝斯杰奥科技有限公司</p>
        </div>
        <p className={s.copyright}>
          © Copyright 2019-{new Date().getFullYear()}, Hebei DSF-GEOS Technology
          Co., Ltd. All rights reserved.
        </p>
      </div>
      <Image alt="logo" width={48} height={48} src={"/logo2.png"} />
    </footer>
  );
}

export default Footer;
