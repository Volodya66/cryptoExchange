import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';
import InputRegister from '../InputRegister/InputRegister';
import Button from 'components/Button/Button';
import css from './FormRegister.module.css';
import ButtonSvg from 'components/Button/ButtonSvg';

import { ReactComponent as Google } from 'images/svgMobile/Google.svg';

const schema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  login: Yup.string().required('Required'),
  rememberMe: Yup.bool(),
});

export default function FormRegister() {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (values, action) => {
    const { email, password, login, rememberMe } = values;
    if (email) {
      const userOrder = {
        email: email,
        password: password,
        login: login,
        rememberMe: rememberMe,
      };
      console.log(userOrder);
      action.resetForm();
    }
  };
  return (
    <div className={css.wrapper}>
      <div className={css.backgroundSvg}></div>
      <div className={css.wrapperReg}>
        <h1 className={css.title}>Реєстрація</h1>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: '',
            password: '',
            login: '',
            rememberMe: false,
          }}
          onSubmit={handleSubmit}
        >
          <Form className={css.forma} autoComplete="on">
            <InputRegister
              onClick={() => setChecked(!checked)}
              checked={checked}
            />

            <Button
              styles={'btnRegisterUSer'}
              type={'submit'}
              text={'Зареєструватись'}
            />
            <ul className={css.listResetLogin}>
              <li>Забули пароль?</li>
              <li>В мене є аккаунт</li>
            </ul>

            <ButtonSvg styles={'btnRegisterGoogle'}>
              <Google />
              <span>Увійти через Google</span>
            </ButtonSvg>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
