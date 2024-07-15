import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.scss'
// import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import Button from '@/components/molecules/Button/Button/Button'
import { Menu } from 'primereact/menu'
import Image from 'next/image'
import imgPlace from '@/../public/images/navbar/tlajo_gris.png'
import hambur from '@/../public/images/navbar/hamburguer.svg'
import back from '@/../public/images/navbar/back.svg'
import { Sidebar } from 'primereact/sidebar';
// import tuer from '@/../public/images/IconoTuer.svg'
// import face from '@/../public/images/IconFace.svg'
// import check from '@/../public/images/check.svg'
// import iconOrganizationChart from '@/../public/images/icons/organization_chart_square.svg'
// import iconControlLink from '@/../public/images/icons/control_link.svg'
// import useWindowSize from '@/hooks/useWindowSize'
// import { FormHookLayout } from '@/components/layouts/FormHookLayout'
// import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { useAuthContext } from '@/context/AuthHook'
// import { useSystemContext } from '@/context/System'
// import { MAIN_MODULE } from '@/utils/env'
// import Cookies from 'js-cookie'
// import { ADMIN } from '@/utils/constants'
// import { decrypt } from '@/utils'
// import { SupportMenu } from '@/components/molecules/SupportMenu/SupportMenu'
// import { OverlayPanel } from 'primereact/overlaypanel'

interface NavbarProps {
  collapseSidebar?: boolean
  module: string
}

export function Navbar({ collapseSidebar, module }: NavbarProps): React.JSX.Element {
  // const { logout } = useAuthContext()
  // const { me } = useSystemContext()
  // const menuRight = useRef(null)
  const router = useRouter()
  const menuRight = useRef<Menu>(null)
  // const menuRef = useRef<OverlayPanel>(null)
  // const windowsSize = useWindowSize()
  const [visibleRight, setVisibleRight] = useState(false);

  // const items = [{
  //   items: me.topMenu
  // }]

  // const methods = useForm()
  // function onSubmit(): void {
  // }

  return (
    <nav className={styles.navbar} id='firstCont'>
      {/* {windowsSize.width !== undefined && windowsSize.width > 767 && */}
        <div className={styles.navbar_container}>
          <div className={styles.navbar_left}>
            {/* <div className={`${styles.navbar_logo} ${collapseSidebar ? styles.navbar_logo_collapse : ''}`}>
              {!collapseSidebar &&
                <Image
                  src={logo}
                  alt='logo'
                  width={127}
                  height={55}
                />}
            </div> */}
            <div className={styles.navbar_item}>
              <div className={styles.module}>
                <div className={styles.module_label}>
                  <div className={styles.mt5px + ' ' + styles.mr108px}>
                    <Image
                      src={imgPlace}
                      alt='logo'
                      // width={240}
                      height={60}
                    />
                  </div>
                  {/* <p className={styles.mt15px}>{text}</p> */}
                  <div className={styles.mt25px + ' ' + styles.mr44px}>
                    <a href="#firstCont" className={styles.links}>
                      Inicio
                    </a>
                  </div>
                  <div className={styles.mt25px + ' ' + styles.mr44px}>
                    <a href="#secondCont" className={styles.links}>
                      Obligados Responsables
                    </a>
                  </div>
                  <div className={styles.mt25px + ' ' + styles.mr44px}>
                    <a href="#thirdCont" className={styles.links}>
                      Normatividad
                    </a>
                  </div>
                  <div className={styles.mt25px + ' ' + styles.mr44px}>
                    <a href="#fourthCont" className={styles.links}>
                      Tutoriales
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.module2}>
                  <div className={styles.mt5px + ' ' + styles.mr108px}>
                    <Image
                      src={imgPlace}
                      alt='logo'
                      width={60}
                      height={60}
                      className={styles.img1}
                    />
                  </div>
                  <Image
                    src={hambur}
                    alt='logo'
                    width={45}
                    height={45}
                    onClick={() => setVisibleRight(true)}
                    className={styles.img2}
                  />
                  
                  <Sidebar 
                    visible={visibleRight} 
                    appendTo="self" 
                    className={styles.sideBar} 
                    position="right" 
                    onHide={() => setVisibleRight(false)}
                    content={({ closeIconRef, hide }) => (
                      <div>
                        <Image
                          src={back}
                          alt='logo'
                          width={45}
                          height={45}
                          onClick={(e) => hide(e)}
                          className={styles.img3}
                        />
                        <div className={styles.mt25px + ' ' + styles.fs20px}>
                          <a href="#firstCont" className={styles.links}
                            onClick={() => setVisibleRight(false)}>
                            Inicio
                          </a>
                        </div>
                        <div className={styles.mt25px + ' ' + styles.fs20px}>
                          <a href="#secondCont" className={styles.links}
                            onClick={() => setVisibleRight(false)}>
                            Obligados Responsables
                          </a>
                        </div>
                        <div className={styles.mt25px + ' ' + styles.fs20px}>
                          <a href="#thirdCont" className={styles.links}
                            onClick={() => setVisibleRight(false)}>
                            Normatividad
                          </a>
                        </div>
                        <div className={styles.mt25px + ' ' + styles.fs20px}>
                          <a href="#fourthCont" className={styles.links}
                            onClick={() => setVisibleRight(false)}>
                            Tutoriales
                          </a>
                        </div>
                      </div>
                    )}
                  >
                  </Sidebar>
                  {/* <div className={styles.mt25px + ' ' + styles.mr44px}>
                    <a href="#firstCont" className={styles.links}>
                      Inicio
                    </a>
                  </div> */}
              </div>
            </div>

          </div>

          {/* <div className={styles.navbar_right}>
            {module === 'responsible-party' &&
              <div style={{}} className={styles.simulacrum}>
                <p className={styles.mt15px}>Simulacro activo</p>
              </div>
            }
            {module === 'constitutional-delivery' &&
              <div style={{}} className={styles.simulacro}>
                <p className={styles.mt15px}>Simulacro activo</p>
              </div>
            }
            <Button
              type='button'
              onClick={(e) => menuRef.current?.toggle(e)}
              variant='transparent-gray'
              width='80px'
              height='70px'
            >
              <div className={styles.button_support_icon}>
                <Image
                  src={iconSupport}
                  alt='icon'
                  width={10}
                  height={10}
                />
              </div>
            </Button>
            <div className={styles.nav_header}>
              <div
                onClick={(event) => menuRight.current?.toggle(event)}
                aria-controls='popup_menu_right'
                aria-haspopup
                className={styles.nav_header}
              // variant='transparent-gray'
              // height='70px'
              >
                <div className={styles.user_template}>
                  <Image alt='' src={defaultUser} width={40} height={40} className={styles.img} />
                  <div className={styles.user_template_group}>
                    <div>{me.fullName}</div>
                    <div>{me.rfc}</div>
                  </div>
                  <Image alt='' src={arrow} width={7} height={12} className={styles.arrow} />
                </div>
              </div>
              <Menu
                id='popup_menu_right'
                model={items}
                popup
                ref={menuRight}
                popupAlignment='right'
                className='user_menu'
              />
            </div>
          </div> */}
        </div>
      {/* } */}
      {/* {windowsSize.width !== undefined && windowsSize.width < 767 && */}
        {/* <div className={styles.navbar_container}>
          <div className={styles.navbar_left}>
            <div className={`${styles.navbar_logo} ${collapseSidebar ? styles.navbar_logo_collapse : ''}`}>
              {!collapseSidebar &&
                <Image
                  src={logo}
                  alt='logo'
                  width={129}
                  height={55}
                />}
            </div>
            <div className={styles.navbar_item}>
              <div className={styles.module}>
                <div className={styles.module_label}>
                  <div className={styles.mt10px}>
                    <Image
                      src={imgPlace}
                      alt='logo'
                      width={129}
                      height={35}
                    />
                  </div>
                  <div className={styles.mt15px + ' ' + styles.ml20px + ' ' + styles.mr10px}>
                    <Image
                      src={image}
                      alt='logo'
                      width={25}
                      height={25}
                    />
                  </div>
                  <p className={styles.mt15px}>{text}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navbar_right}>
            <div className={styles.navbar_item}>
              <div
                onClick={(event) => menuRight.current?.toggle(event)}
                aria-controls='popup_menu_right'
                aria-haspopup
                className={styles.nav_header}
              // variant='transparent-gray'
              // height='70px'
              >
                <div className={styles.user_template}>
                  <Image alt='' src={defaultUser} width={40} height={40} className={styles.img} />
                  <div className={styles.user_template_group}>
                    <div>{me.fullName}</div>
                    <div>{me.rfc}</div>
                  </div>
                  <Image alt='' src={arrow} width={40} height={40} className={styles.arrow} />
                </div>
              </div>
              <Menu
                id='popup_menu_right'
                model={items}
                popup
                ref={menuRight}
                popupAlignment='right'
                className='user_menu'
              />
            </div>
          </div>
        </div> */}
      {/* } */}
      {/* <SupportMenu ref={menuRef} /> */}
    </nav>
  )
}
