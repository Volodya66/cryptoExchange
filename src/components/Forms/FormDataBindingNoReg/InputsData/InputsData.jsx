import { Field  } from 'formik'

import css from './Inputs.module.css';

export default function InputData() {
    
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor="name">
                <p className={css.text}>Нік в телеграмі</p>
                <Field placeholder='@Івась' className={css.inp} type="text" name="name" required />
                {/* <ErrorMessage name="name">
                    {() => <div className={css.error}>Please enter numbers only</div>}
                </ErrorMessage> */}
            </label>
            <label className={css.label} htmlFor="number">
                <p className={css.text}>Номер телефону</p>  
                <Field className={css.inp} placeholder="38000 000 00 00" type="tel" name="number" required />
                {/* <ErrorMessage name="number">
                    {() => <div className={css.error}>Please enter numbers only</div>}
                </ErrorMessage> */}
            
            </label>
         
        </div>
    )
}