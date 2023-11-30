import { Formik, Form } from 'formik';
// import * as Yup from "yup";
import * as Yup from 'yup';

import InputData from '../InputsData/InputsData';
import Button from 'components/Button/Button';
import css from "./FormBinding.module.css"

const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required('Required'),
    getMoneys:Yup.number().required('Required'),
    giveMoney:Yup.number().required('Required'),
})

export default function FormData () {

return(
    <>
     <Formik
          validationSchema={schema}
          initialValues={{
            name: '',
            number: '',
            getMoneys:  '',
            giveMoney:""
          }}
          onSubmit={''}>
          <Form className={css.forma} autoComplete="on">
            
            <InputData />
            
        <Button styles={"btnAddDataUser"} type={"submit"} text={"Створити заявку"} />
          </Form>
        </Formik>
    </>
)

}
