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
import play from '@/../public/images/landing/Icon(24).svg'
import person from '@/../public/images/landing/Recurso_1.png'
import sierlogo from '@/../public/images/landing/LogoSIER.png'
import pdfimg from '@/../public/images/landing/Icon(25).svg'
import tlajo from '@/../public/images/navbar/tlajo_blanco.png'
import personaje from '@/../public/images/landing/personaje.png'
import personaje2 from '@/../public/images/landing/personaje2.png'
import mano from '@/../public/images/landing/mano.png'
import mano2 from '@/../public/images/landing/mano2.png'
import LogoSIER from '@/../public/images/landing/LogoSIER.png'

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
            // height="754px" 
            src="https://www.youtube.com/embed/inRzHtiBz8Q"
            title="Tlajomulco SIER Vol  2 8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className={styles.colors_container} id='secondCont'>
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
          <div className={styles.text}>Sujetos obligados</div>
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
      <div className={styles.colorBalls} id='thirdCont'>
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
        <div className={styles.h990px}>
          <div className={styles.colors_container}>
            <div className={styles.green}>
              <div className={styles.fs50px}>Contenido del Acta de Entrega</div>
              <div className={styles.fs30px + ' ' + styles.mt25px}>El acta de entrega-recepción debe incluir información detallada sobre el estado que guardan los recursos humanos, materiales, financieros, y documentales, así como los asuntos en trámite y pendientes de resolución.</div>
            </div>
            <div className={styles.red}>
              <div className={styles.fs40px}>Responsabilidad de los Entrantes</div>
              <div className={styles.fs25px + ' ' + styles.mt15px}>Los servidores públicos entrantes deben
                recibir y verificar la información y
                recursos entregados, y tienen la
                responsabilidad de reportar cualquier
                irregularidad detectada.
              </div>
            </div>
            <div className={styles.yellow}>
              <div className={styles.fs39px}>Firma del Acta</div>
              <div className={styles.fs20px + ' ' + styles.mt25px}>El acta debe ser firmada por ambas
                partes, la saliente y la entrante,
                como constancia de la entrega -
                recepción de los recursos
                y la información.
              </div>
            </div>
            <div className={styles.blue}>
              <div className={styles.fs40px}>Obligación de Entrega</div>
              <div className={styles.fs26px + ' ' + styles.mt15px}>Los servidores públicos salientes están obligados a entregar la información y los recursos a los servidores públicos entrantes.</div>
            </div>
            <div className={styles.grey}>
              <div className={styles.fs35px}>Documentación Soporte</div>
              <div className={styles.fs20px + ' ' + styles.mt25px}>Deben adjuntarse a la
                entrega-recepción los documentos
                que respalden a información y los
                recursos reportados.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.begin}>
        <Image 
          src={person}
          alt='ball1'
          className={styles.imgPerson}
        />
        <div className={styles.mcontainer}>
          <div className={styles.textBig}>¡Comienza tu entrega!</div>
          <div className={styles.textsmall}>Plazo de entrega : 1- 5 Octubre</div>
          <a href="https://sier.tlajomulco.gob.mx/">
            <div className={styles.bigBlue}>Ingresa ahora</div>
          </a>

        </div>
      </div>
      <div className={styles.tutos} id='fourthCont'>
        <div className={styles.image_title}>
          <div className={styles.image_person}>
            <Image src={personaje} alt='' />
          </div>
          <div className={styles.hand}>
            <Image src={mano} alt='' />
          </div>
          <div className={styles.divBlue}>Tutoriales Sujeto obligado</div>
        </div>
        <div className={styles.dFlexy}>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={LogoSIER}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Inicio de sesion</div>
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Inicio de sesión</div>
              <div className={styles.fs24px}>Video tutorial para un primer inicio de sesión como usuario registrado en el sistema</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Recuperar contraseña</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Recuperar contraseña</div>
              <div className={styles.fs24px}>Video tutorial del proceso de recuperar contraseña</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Panel de entrega</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Gestión de capturistas</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Selección y captura de anexos</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Foliado y acta</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tutos2} id='fourthCont'>
        <div className={styles.image_title}>
          <div className={styles.image_person}>
            <Image src={personaje2} alt='' />
          </div>
          <div className={styles.hand}>
            <Image src={mano2} alt='' />
          </div>
          <div className={styles.divBlue}>Tutoriales Capturistas</div>
        </div>
        <div className={styles.dFlexy}>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={LogoSIER}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Inicio de sesion</div>
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Inicio de sesión</div>
              <div className={styles.fs24px}>Video tutorial para un primer inicio de sesión como usuario registrado en el sistema</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Recuperar contraseña</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Recuperar contraseña</div>
              <div className={styles.fs24px}>Video tutorial del proceso de recuperar contraseña</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Panel de entrega</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Selección y captura de anexos</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
          <div className={styles.w545px}>
            <div className={styles.divContain}>
              <div className={styles.dFlex}>
                <Image 
                  src={sierlogo}
                  alt='ball1'
                  className={styles.imgsier}
                />
                <div className={styles.pipe}></div>
                <div className={styles.fs30pxTuto}>Tutoriales</div>
              </div>
              <div className={styles.fs50px}>Foliado y acta</div>
              {/* <div className={styles.lineGray}></div>
              <div className={styles.fs22px}>Capturista</div> */}
              <div className={styles.blueBall}>
                <Image 
                  src={play}
                  alt='ball1'
                  className={styles.img18}
                />
              </div>
            </div>
            <div className={styles.downTexts}>
              {/* <div className={styles.fs32px}>Activación de anexos</div>
              <div className={styles.fs24px}>Video tutorial del proceso para activar un anexo</div> */}
              <div className={styles.dFle}>
                <div className={styles.fs24px + ' ' + styles.fw500}>Ver manual</div>
                <Image 
                  src={pdfimg}
                  alt='ball1'
                  className={styles.pdfimg}
                />
              </div>
              {/* <div className={styles.lineBot}></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.fs30px}>Consulta mas información en:</div>
          <div className={styles.fs20px}>www.entregarecepcion.tlajomulco.gob.mx</div>
        </div>
        <Image 
          src={tlajo}
          alt='ball1'
          className={styles.imgTlajo}
        />
      </div>
    </div>
  )
}
