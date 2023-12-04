// import { useEffect } from 'react'; 

import { Field } from 'formik'

import css from './InputRegister.module.css';

import { ReactComponent as Check } from "images/svgMobile/check.svg"

export default function InputRegister({checked,onClick}) {
    console.log('checked: ', checked);
 
// useEffect(()=>{
    
// },[checked])

  
    
    return (
        <div className={css.container}>

         <label className={css.label} htmlFor="email">
         <p className={css.text}>E-mail</p>
         <Field placeholder='name@company.com' className={css.inp}
          type="email" name="email" required />
         </label>             
 
        <label className={css.label} htmlFor="login">
        <p className={css.text}>Login</p>
         <Field placeholder='login' className={css.inp} 
         type="text" name="login" required />
         </label>            


         <label className={css.label} htmlFor="password">
            <p className={css.text}>Пароль</p>
         <Field placeholder='password' className={css.inp} 
         type="password" name="password" required />
         </label>
         

        <label   className={css.inpCheckbox} htmlFor="rememberMe">
         <Field  className={css.checkboxChecked} 
         type="checkbox" id="rememberMe" name="rememberMe"
           />
                <span  className={css.spanChecked}>{checked? <Check/>:''}</span>
         <p  onClick={onClick} className={css.textCheckbox}>Запам’ятати мене</p>
         </label>
                
        </div>


               
    )
}