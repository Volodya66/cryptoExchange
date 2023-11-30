import Section from "components/SectionWraps/Sections/Section"
import FormData from "components/Forms/FormDataBindingNoReg/FormaData/FormDataBinding"
import css from "./SectionOne.module.css"
// import { ReactComponent  as SvgReveranse} from 'images/svgMobile/arrows-exchange.svg'
// import { ReactComponent  as Reveranse} from 'images/svgMobile/exchange.svg'

export default function SectionOne () {
 
    
return(
    <>
    <Section typeSection={""} containerSection={"container"} id="userContacts">
    <h2 className={css.titleSectionOne}>Обміняти криптовалюту</h2> 
    
    {/* <div className={css.containerExchange}>
        
    <div className={css.efficiency}>
        <p className={css.text}>Ви віддаєте</p>     
     <ul className={css.listCoin}>
        <li className={css.listCoinItem}>
         <p className={css.contentContainer}>0</p>
        </li>
        <li className={css.listCoinItem}>
             <p className={css.contentContainer}>0</p>
        </li>
     </ul> 
    </div>
    
    <div>

     <div className={css.svgReveranse}> 
     <Reveranse  width='35' height='35' />
     </div>               
  
         
    </div>

    <div className={css.receiving}>
     <p className={css.text}>Ви отримуєте</p>
    <ul className={css.listCoin}>
    <li className={css.listCoinItem}>
         <p className={css.contentContainer}>0</p>
    </li>
    <li className={css.listCoinItem}>
             <p className={css.contentContainer}>0</p>
    </li>
     </ul> 
    </div>
 
    </div> */}
    
    <div className={css.userData}>
     <FormData/>
    </div>
   
    </Section>
    
    </>
)

}
