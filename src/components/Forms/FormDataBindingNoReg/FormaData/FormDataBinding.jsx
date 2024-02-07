import { Formik, Form } from 'formik';
// import * as Yup from "yup";
import * as Yup from 'yup';

import InputData from '../InputsData/InputsData';
import Button from 'components/Button/Button';
import css from './FormBinding.module.css';

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
  getMoneys1: Yup.number().required('Required'),
  getMoneys2: Yup.string().required('Required'),
  // giveMoney1:Yup.number().required('Required'),
  giveMoney2: Yup.string().required('Required'),
});

export default function FormData() {
  const handleSubmit = (values, action) => {
    const { name, number, getMoneys1, getMoneys2, giveMoney2 } = values;
    if (name) {
      const userOrder = {
        name: name,
        number: number,
        userGivesAmount: getMoneys1,
        nameCryptocurrencyGives: getMoneys2,
        // userGetAmount :giveMoney1,
        nameCryptocurrencyGet: giveMoney2,
      };

      console.log(userOrder);

      action.resetForm();
    }
  };

  return (
    <>
      <Formik
        className={css.form}
        validationSchema={schema}
        initialValues={{
          name: '',
          number: '',
          getMoneys1: '',
          getMoneys2: '',
          // giveMoney1: "",
          giveMoney2: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.forma} autoComplete="on">
          <InputData />

          <Button
            styles={'btnAddDataUser'}
            type={'submit'}
            text={'Створити заявку'}
          />
        </Form>
      </Formik>
    </>
  );
}
