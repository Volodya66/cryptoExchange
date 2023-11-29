import Section from "components/SectionWraps/Sections/Section"
import css from "./SectionFour.module.css"


export default function SectionFour() {

return(
<Section typeSection={""} containerSection={"container"}>
<h4 className={css.title}>FAQ</h4>
<ul className={css.listInformation}>
    <li className={css.listItem}>
        <p className={css.textListItem}>Які валюти підтримує ваш обмінник?</p>
    </li>
    <li className={css.listItem}>
        <p className={css.textListItem}>Чи легально купляти криптовалюти в Україні?</p>
    </li>
    <li className={css.listItem}>
        <p className={css.textListItem}>Як створити криптогаманець?</p>
    </li>
    <li className={css.listItem}>
        <p className={css.textListItem}>Чи існують приховані комісії або будь-які інші платежі при користуванні вашим обмінником?</p>
    </li>    
</ul>
    

</Section>        
)
}