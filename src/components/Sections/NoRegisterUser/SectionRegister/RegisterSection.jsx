
import css from "./Register.module.css"

import Section from "components/SectionWraps/Sections/Section"
import FormRegister from "components/Forms/FormRegisterUser/FormRegister/FormRegister"

export default function Register  () {
  

return(
    <>
    <Section containerSection="container-registration">
     <h1 className={css.title}>Реєстрація</h1>   
     <FormRegister/>
    </Section>
    
    </>
)

}
