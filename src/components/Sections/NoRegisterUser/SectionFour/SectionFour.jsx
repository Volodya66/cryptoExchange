import Section from "components/SectionWraps/Sections/Section"
import css from "./SectionFour.module.css"
import {ReactComponent as Dovn} from "images/svgMobile/down.svg"

export default function SectionFour() {

return(
<Section typeSection={""} containerSection={"container"} id={"FAQ"}>
<h4 className={css.title}>FAQ</h4>
<ul className={css.listInformation}>
    <li className={css.listItem}>
    <div className={css.owerlay} >
         <p className={css.textListItem}>Які валюти підтримує ваш обмінник?</p>   <Dovn width="25" height="25" />
    </div>
    </li>
    <li className={css.listItem}>
    <div className={css.owerlay} >
    <p className={css.textListItem}>Чи легально купляти криптовалюти в Україні?</p>  <Dovn width="25" height="25" />
    </div>

    </li>

    <li className={css.listItem}>
    <div className={css.owerlay} >
       <p className={css.textListItem}>Як створити криптогаманець?</p> <Dovn width="25" height="25" />
    </div>
    </li>
    <li className={css.listItem}>
    <div className={css.owerlay} >
      <p className={css.textListItem}>Чи існують приховані комісії або будь-які інші платежі при користуванні вашим обмінником?</p> <Dovn width="25" height="25" />
    </div>
       
    </li>    
</ul>
    

</Section>        
)
}