import React from 'react'
import css from './footer.module.css';
import Image from "next/image";
import logo from "../../assets/Logo.png";
export default function Footer() {
  return (
    <div className={css.footerContainer}>
     <span>ALL Right Reserved</span>
     
     <div className={css.socialIcons}>
     <i className="ri-instagram-line"></i>
     <i className="ri-twitter-line"></i>
     <i className="ri-linkedin-box-fill"></i>
     </div>
     <div className={css.logoContainer}>
        <Image src={logo} alt="Logo" width={50} height={50}/>
        <span>FUdo</span>
      </div>
    </div>
  )
}
