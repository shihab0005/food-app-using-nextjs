import React from "react";
import css from "./header.module.css";
import Image from "next/image";
import logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <div className={css.headerContainer}>
      <div className={css.logoContainer}>
        <Image src={logo} alt="Logo" width={50} height={50}/>
        <span>FUdo</span>
      </div>

      {/* <div className={css.menuContainer}> */}
        <ul className={css.menu}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
      {/* </div> */}

      <div className={css.rightContainer}>
        <div className={css.cart}>
        <i className="ri-shopping-bag-line"></i>
        <div className={css.badge}>2</div>
        </div>
      </div>

    </div>
  );
}
