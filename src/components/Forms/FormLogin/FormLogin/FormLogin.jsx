import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';
import InputLogin from '../InputLogin/InputLogin';
import Button from 'components/Button/Button';
import css from './FormLogin.module.css';
import ButtonSvg from 'components/Button/ButtonSvg';

import { ReactComponent as Google } from 'images/svgMobile/Google.svg';

const schema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  rememberMe: Yup.bool(),
});

export default function FormLogin() {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (values, action) => {
    const { email, password, rememberMe } = values;
    if (email) {
      const userOrder = {
        email: email,
        password: password,
        rememberMe: rememberMe,
      };
      console.log(userOrder);
      action.resetForm();
    }
  };
  return (
    <div className={css.wrapper}>
      <div className={css.backgroundSvg}></div>
      <div className={css.wrapperLogin}>
        <h1 className={css.title}>Вхід</h1>
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
            <InputLogin
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
