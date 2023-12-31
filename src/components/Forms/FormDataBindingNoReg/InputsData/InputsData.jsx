import { Field  } from 'formik'

import css from './Inputs.module.css';
// import CustomSelect from './CusyomSelect';
import ButtonSvg from 'components/Button/ButtonSvg';

import { ReactComponent  as Reveranse} from 'images/svgMobile/exchange.svg'


export default function InputData() {
    
    return (
        <div className={css.container}>

            <div>
                <div className={css.firstContainer}>
                <label className={css.labelGet} htmlFor="getMoneys1">
                <p className={css.text}>Ви віддаєте</p>
                <Field placeholder='0' className={css.inpGet} type="text" name="getMoneys1" required />
                </label>             
 
                <label className={css.labelGet} htmlFor="getMoneys2">
                <Field placeholder='ETH' className={css.inpGet} type="text" name="getMoneys2" required />
                </label>
                </div>
                <div className={css.reveranse}>
                <ButtonSvg styles={'btnReverans'}>
                  <Reveranse/>
                </ButtonSvg>
                </div>


                <div className={css.firstContainer}>
                <label className={css.labelGet} htmlFor="giveMoney1">
                <p className={css.text}>Ви отримуєте</p>
                <Field placeholder='0' className={css.inpGet} type="text" name="giveMoney1" required />
                </label>
                    
                <label className={css.labelGet} htmlFor="giveMoney2">
                <Field placeholder='USDT' className={css.inpGet} type="text" name="giveMoney2" required />
                </label>

                </div>
            </div>

            <label className={css.label} htmlFor="name">
                <p className={css.text}>Нік в телеграмі</p>
                <Field placeholder='@Івась' className={css.inp} type="text" name="name" required />

            </label>
            <label className={css.label} htmlFor="number">
                <p className={css.text}>Номер телефону</p>  
                <Field className={css.inp} placeholder="38000 000 00 00" type="tel" name="number" required />

            </label>
         
        </div>
    )
}

//              <Field className={css.select} as="select" name="giveMoneySelect">
//              <option value="red">$</option>
//              <option value="green">$$</option>
//              <option value="blue">$$$</option>
//   </Field>
            


        //     <div className={css.wrapperRatio}>
        //   <label className={css.labelRatio}>
        //     <Field className={css.inputRatio} type="radio" name="currency" value="USD" id="usd" />
        //     USD
        //   </label>

        //   <label className={css.labelRatio}>
        //     <Field className={css.inputRatio} type="radio" name="currency" value="EUR" id="eur" />
        //     EUR
        //   </label>

        //   <label className={css.labelRatio}>
        //     <Field className={css.inputRatio} type="radio" name="currency" value="ETH" id="eth" />
        //     Ethereum 
        //   </label>

        //   <label className={css.labelRatio}>
        //     <Field className={css.inputRatio} type="radio" name="currency" value="XMR" id="xmr" />
        //     Monero 
        //   </label>

        //   <label className={css.labelRatio}>
        //     <Field className={css.inputRatio} type="radio" name="currency" value="BTC" id="btc" />
        //     Bitcoin 
        //   </label>             
        //     </div> 