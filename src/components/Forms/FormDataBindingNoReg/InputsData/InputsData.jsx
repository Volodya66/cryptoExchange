import { Field  } from 'formik'

import css from './Inputs.module.css';

import { ReactComponent  as Reveranse} from 'images/svgMobile/exchange.svg'


export default function InputData() {
    
    return (
        <div className={css.container}>

            <div>
                <div className={css.firstContainer}>
                <label className={css.labelGet} htmlFor="getMoneys">
                <p className={css.text}>Ви віддаєте</p>
                <Field placeholder='0' className={css.inpGet} type="text" name="getMoneys" required />
               </label>  
              {/* <Field className={css.select} as="select" name="getMoneySelect">
             <option select className={css.option} value="red">$</option>
             <option className={css.option} value="green">$$</option>
             <option className={css.option} value="blue">$$$</option>
              </Field> */}
                </div>
                 <Reveranse/>
                <div className={css.firstContainer}>                <label className={css.labelGet} htmlFor="giveMoney">
                <p className={css.text}>Ви отримуєте</p>
                <Field placeholder='0' className={css.inpGet} type="text" name="giveMoney" required />
                </label>
            {/* <Field className={css.select} as="select" name="giveMoneySelect">
             <option value="red">$</option>
             <option value="green">$$</option>
             <option value="blue">$$$</option>
              </Field> */}
                </div>
            </div>

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