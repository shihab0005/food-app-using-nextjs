import React from 'react'
import css from './hero.module.css'
import cherry from '../../assets/Cherry.png';
import Image from 'next/image';


export default function Hero() {
  return (
    <div className={css.heroContianer}>

      <div className={css.cherryDiv}>
        <span>More Then Faster</span>
        <Image src={cherry} />
      </div>
    </div>
  )
}
