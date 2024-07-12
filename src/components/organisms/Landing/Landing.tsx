import React, { useRef, useState } from 'react'
import styles from './Landing.module.scss'
import imgOval1 from '@/../public/images/landing/Oval.svg'
import imgOval2 from '@/../public/images/landing/Oval(1).svg'
import imgGreen from '@/../public/images/landing/Rectangle1.svg'
import imgCheckGreen from '@/../public/images/landing/Icon(23).svg'

import Image from 'next/image'

export function Landing(): React.JSX.Element {

  return (
    <div className={styles.landing}>
      <div className={styles.balls}>
        <div className={styles.backBall1}>
          <Image
            src={imgOval1}
            alt='ball1'
            className={styles.backBall1}
            // width={240}
            // height={60}
          />
        </div>
        <div className={styles.backBall2}>
          <Image
            src={imgOval2}
            alt='ball2'
            className={styles.backBall2}
            // width={240}
            // height={60}
          />
        </div>
        <div className={styles.video_container}>
          <iframe 
            width="100%" 
            height="754px" 
            
            src="https://www.youtube.com/embed/inRzHtiBz8Q"
            title="Tlajomulco SIER Vol  2 8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <div className={styles.colors_container}>
            <div className={styles.yellow}></div>
            <div className={styles.green}></div>
            <div className={styles.blue}></div>
            <div className={styles.red}></div>
          </div>
        </div>
      </div>
      <div className={styles.portraits}>
        <div className={styles.div1}>
          <div className={styles.divGreen}></div>
          <div className={styles.text}>Obligados responsables</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Presidente Municipal</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Regidores</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Síndico</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Secretario General</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Tesorero</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Contralor</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Oficiales mayores</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Comisario de la Policía preventiva municipal</div>
          </div>
        </div>
        <div className={styles.div3}></div>
        <div className={styles.div4}></div>
        <div className={styles.div5}></div>
        <div className={styles.div6}></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
