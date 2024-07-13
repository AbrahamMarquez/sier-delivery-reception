import React, { useRef, useState } from 'react'
import styles from './Landing.module.scss'
import imgOval1 from '@/../public/images/landing/Oval.svg'
import imgOval2 from '@/../public/images/landing/Oval(1).svg'
import imgGreen from '@/../public/images/landing/Rectangle1.svg'
import imgCheckGreen from '@/../public/images/landing/Icon(23).svg'
import imgOc from '@/../public/images/landing/Rectangle.svg'
import imgOc1 from '@/../public/images/landing/Rectangle(1).svg'
import imgOc2 from '@/../public/images/landing/Rectangle(2).svg'
import imgOc3 from '@/../public/images/landing/Rectangle(3).svg'

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
        <div className={styles.div3}>
          <Image
            src={imgOc}
            alt='ball1'
            className={styles.imgFloat1}
          />
          <Image
            src={imgOc1}
            alt='ball1'
            className={styles.imgFloat2}
          />
        </div>
        <div className={styles.div4}>
          <Image
            src={imgOc2}
            alt='ball1'
            className={styles.imgFloat1}
          />
          <Image
            src={imgOc3}
            alt='ball1'
            className={styles.imgFloat2}
          />
        </div>
        <div className={styles.div5}>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Fiscal ambiental de Tlajomulco</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Coordinadores Generales</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>Directores Generales</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>secretario particular</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>los directores de Área</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>delegados y agentes municipales</div>
          </div>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>jefes de departamento</div>
          </div>
        </div>
        <div className={styles.div6}>
          <div className={styles.displayFlex}>
            <Image
              src={imgCheckGreen}
              alt='ball1'
              className={styles.img}
            />
            <div className={styles.textBlack}>
              Y demás mandos medios relacionados con el manejo y/o control de bienes financieros o patrimoniales, así como los Titulares de los Organismos Públicos Descentralizados del Municipio
            </div>
          </div>
        </div>
      </div>
      <div className={styles.colorBalls}>
        <div className={styles.div1}>
          <div className={styles.divYellow}></div>
          <div className={styles.text}>Normatividad</div>
        </div>
        <div className={styles.textBig}>
          <span>El Artículo 20 de la Ley de Entrega-Recepción del Estado de Jalisco</span> es clave porque establece las responsabilidades y obligaciones de los servidores públicos salientes en el proceso de entrega-recepción de su gestión. 
        </div>
        <div className={styles.textBig + ' ' + styles.pt0}>
          Aquí están los puntos más importantes:
        </div>
        <div className={styles.colors_container}>
          <div className={styles.green}></div>
          <div className={styles.red}></div>
          <div className={styles.yellow}></div>
          <div className={styles.blue}></div>
          <div className={styles.grey}></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
