import Section from "components/SectionWraps/Sections/Section"
import css from "./Footer.module.css"

import {ReactComponent as Instagram} from "../../images/svgMobile/Instagram.svg"
import {ReactComponent as Telegram} from "../../images/svgMobile/telegram.svg"

export default function Footer ()  {
  

return (
<Section typeSection={""} containerSection={"sectionFooter"}>
<div className={css.wrapperContent}>
    <div className={css.textSection}>
        <h4 className={css.titleText}>Crypto Change</h4>
        <p className={css.textOnline}>Онлайн обмінник криптовалют</p>
    </div>
    <div className={css.containerSocial}>
        <ul className={css.listContact}>
            <li className={css.f}><a className={css.link} href="tel:+380000000000" target="blank">+38000 000 0000</a></li>
            <li className={css.f}><a className={css.link} href="mailto:mailing@gmail.com" target="blank">mailing@gmail.com</a></li>
        </ul>
        <ul className={css.listIcon}>
            <li className={css.f}><a className={css.link} href="https://www.instagram.com/" target="blank" title="Інстаграм"><Instagram/></a></li>
            <li className={css.f}><a className={css.link} href="https://web.telegram.org./#/login" target="blank" title="Телеграм"><Telegram/></a></li>
        </ul>
    </div>
</div>
<ul className={css.listFooter}>
    <li className={css.listFooterItem}>Політика конфіденційності</li>
    <li className={css.listFooterItem}>Публічна оферта</li>
    <li className={css.listFooterItem}>© Всі права захищені</li>
</ul>
        

</Section>
            
  
)
}
