import { Formik, Form } from 'formik';
// import * as Yup from "yup";
import * as Yup from 'yup';

import InputData from '../InputsData/InputsData';
import Button from 'components/Button/Button';
import css from "./FormBinding.module.css"

const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required('Required')
})

export default function FormData () {

return(
    <>
     <Formik
          validationSchema={schema}
          initialValues={{
            name: '',
            number: ''
          }}
          onSubmit={''}>
          <Form className={css.forma} autoComplete="on">
            
            <InputData />
            
  
            {/* <ul className={css.listBtn}> */}
              {/* <li><Button onClick={onClickCancel} id='1' type={'button'} styles1={'style'} text={'Cancel'} /></li>
              <li><Button type={'submit'} id='2' styles1={'style'} styles2={'blue'} text={ loadContact? "Loading...":"Save" } /></li> */}
            {/* </ul> */}
        <Button styles={"btnAddDataUser"} type={"submit"} text={"Створити заявку"} />
          </Form>
        </Formik>
    </>
)

}
