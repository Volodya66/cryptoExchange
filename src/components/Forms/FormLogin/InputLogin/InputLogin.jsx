
import { Field } from 'formik'

import css from './InputLogin.module.css';

import { ReactComponent as Check } from "images/svgMobile/check.svg"

export default function InputRegister({checked,onClick}) {
   
    
    return (
        <div className={css.container}>

         <label className={css.label} htmlFor="email">
         <p className={css.text}>E-mail</p>
         <Field placeholder='name@company.com' className={css.inp}
          type="email" name="email" required />
         </label>             

         <label className={css.label} htmlFor="password">
            <p className={css.text}>Пароль</p>
         <Field placeholder='password' className={css.inp} 
         type="password" name="password" required />
         </label>

        <label   className={css.inpCheckbox} htmlFor="rememberMe">
         <Field  className={css.checkboxChecked} 
         type="checkbox" id="rememberMe" name="rememberMe"/>
                <span  className={css.spanChecked}>{checked? <Check/>:''}</span>
         <p  onClick={onClick} className={css.textCheckbox}>Запам’ятати мене</p>
         </label>
                
        </div>


               
    )
}