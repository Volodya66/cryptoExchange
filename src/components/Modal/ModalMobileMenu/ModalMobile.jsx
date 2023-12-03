import { useSelector } from "react-redux";

import Button from "components/Button/Button"

import css from "./ModalMobile.module.css"

import {ReactComponent as Instagram} from "images/svgMobile/Instagram.svg"
import {ReactComponent as Telegram} from "images/svgMobile/telegram.svg"

import { stateModal } from "reducer/modalReducer/selectorsModal";

export default function ModalMenu({openModal}) {
 

const stateIsOpenModal = useSelector(stateModal);
// console.log('stateIsOpenModal: ', stateIsOpenModal);
    
const clickOnListNav=(e)=>{
if(e.target !== e.currentTarget){
 openModal()   
}
    
}
    
return (
    <>
    
    {/* <div className={css.mobileMenu}> */}
        
        <div className={`${css.modal}  ${stateIsOpenModal ? css.isOpened : ""}`}>
         <ul className={css.listHeder}>
            <li><a className={css.logo}  href="#@sdfs">Crypto Change</a></li>
            <li><Button styles={'btnModal'} onClick={openModal}  text={"Згорнути"} /></li>
         </ul>
         

            
          <ul className={css.regAuth}>
            <li><span className={css.textAuth}>Реєстрація</span></li>
            <li><span className={css.textAuth}>Вхід</span></li>
         </ul>  

                    

        <nav>
            <ul onClick={clickOnListNav} className={css.nav}>
                <li><a className={css.textNav} href="#userContacts"> Обміняти криптовалюту</a></li>
                <li><a className={css.textNav} href="#info">Інфо</a></li>
                <li><a className={css.textNav} href="#deliveryPoints">Пункти видачі</a></li>
                <li><a className={css.textNav} href="#FAQ">FAQ</a></li>
            </ul>
        </nav>
        <div className={css.containerSocial}>
        <ul className={css.listContact}>
            <li className={css.f}><a className={css.link} href="tel:+380000000000" target="blank">+38000 000 0000</a></li>
            <li className={css.f}><a className={css.link} href="mailto:mailing@gmail.com" target="blank">mailing@gmail.com</a></li>
        </ul>
        <ul className={css.listIcon}>
            <li className={css.f}><a className={css.link} href="https://www.instagram.com/" target="blank" title="Інстаграм"><Instagram/></a></li>
            <li className={css.f}><a className={css.link} href="https://web.telegram.org./#/login" target="blank" title="Телеграм"><Telegram/></a></li>
        </ul>


    {/* </div>      */}
    </div>
        
    </div>    
    
    </>
)
  
}
