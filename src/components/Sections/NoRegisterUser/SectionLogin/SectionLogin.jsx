import Section from "components/SectionWraps/Sections/Section"


import css from "./SectionLogin.module.css"
import FormLogin from "components/Forms/FormLogin/FormLogin/FormLogin"
import Footer from "components/Sections/Footer"

export default function SectionLogin ()  {
  
return(
    
    <>
    <Section containerSection={'container-login'} >
    <h1 className={css.title}>Вхід</h1>  
     <FormLogin/>       
    <Footer/>

    </Section>
    
    </>

)

}
