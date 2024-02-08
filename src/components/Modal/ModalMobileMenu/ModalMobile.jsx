import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import ButtonSvg from 'components/Button/ButtonSvg';

import css from './ModalMobile.module.css';

import { ReactComponent as Instagram } from 'images/svgMobile/Instagram.svg';
import { ReactComponent as Telegram } from 'images/svgMobile/telegram.svg';
import { ReactComponent as Sun } from 'images/svgMobile/sun.svg';
import { ReactComponent as Moon } from 'images/svgMobile/moon.svg';

import { stateModal } from 'reducer/modalReducer/selectorsModal';
import { NavLink } from 'react-router-dom';

export default function ModalMenu({ openModal }) {
  const stateIsOpenModal = useSelector(stateModal);
  // console.log('stateIsOpenModal: ', stateIsOpenModal);

  // const navigate = useNavigate();

  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      openModal();
    }
  };

  const clickOnListNav = e => {
    if (e.target !== e.currentTarget) {
      openModal();
    }
  };

  const onClickSwitch = e => {
    const button = e.currentTarget;
    const sun = button.querySelector('.sun');
    const spanWrapperSvg = button.querySelector('.spanSvg');
    sun.classList.toggle('sun-icon');
    spanWrapperSvg.classList.toggle('buttonSwitchRotate');
  };

  return (
    <>
      {/* <div className={css.mobileMenu}> */}

      <div className={`${css.modal}  ${stateIsOpenModal ? css.isOpened : ''}`}>
        <ul className={css.listHeder}>
          <li>
            {/* <a className={css.logo} href="#@sdfs">Crypto Change</a> */}
            <NavLink onClick={onClickClose} className={css.logo} to="/">
              {' '}
              Crypto Change{' '}
            </NavLink>
          </li>
          <li>
            <Button styles={'btnModal'} onClick={openModal} text={'Згорнути'} />
          </li>
        </ul>

        <ul className={css.regAuth}>
          <li>
            {' '}
            <NavLink
              onClick={onClickClose}
              className={css.textAuth}
              to="/registration"
            >
              Реєстрація
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              onClick={onClickClose}
              className={css.textAuth}
              to="/login"
            >
              Вхід
            </NavLink>
          </li>
        </ul>

        <div className={css.wrapperSwitch}>
          <p className={css.textSwitch}>Переключити на темну тему</p>
          {/* <div className={css.backgroundSwitch}> */}
          <ButtonSvg id={'switch'} onClick={onClickSwitch} styles={'switch'}>
            <span className="spanSvg">
              <Sun className="sun" width={36} height={36} />
              <Moon className="moon" width={36} height={36} />
            </span>
            {/* <Sun className="sun" width={36} height={36} />
              <Moon className="moon" width={36} height={36} /> */}
          </ButtonSvg>
          {/* </div> */}
        </div>

        <nav>
          <ul onClick={clickOnListNav} className={css.nav}>
            {/* <li>
              {' '}
          
              <a
                className={css.textNav}
                onClick={() => {
                  navigate('/crypto#userContacts');
                  clickOnListNav();
                }}
                href="/crypto#userContacts"
              >
                Обміняти криптовалюту
              </a>
              
            </li> */}
            <li>
              {' '}
              <a className={css.textNav} href="#userContacts">
                {' '}
                Обміняти криптовалюту
              </a>
            </li>
            <li>
              <a className={css.textNav} href="#info">
                Інфо
              </a>
            </li>
            <li>
              <a className={css.textNav} href="#deliveryPoints">
                Пункти видачі
              </a>
            </li>
            <li>
              <a className={css.textNav} href="#FAQ">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <div className={css.containerSocial}>
          <ul className={css.listContact}>
            <li className={css.f}>
              <a className={css.link} href="tel:+380000000000" target="blank">
                +38000 000 0000
              </a>
            </li>
            <li className={css.f}>
              <a
                className={css.link}
                href="mailto:mailing@gmail.com"
                target="blank"
              >
                mailing@gmail.com
              </a>
            </li>
          </ul>
          <ul className={css.listIcon}>
            <li className={css.f}>
              <a
                className={css.link}
                href="https://www.instagram.com/"
                target="blank"
                title="Інстаграм"
              >
                <Instagram />
              </a>
            </li>
            <li className={css.f}>
              <a
                className={css.link}
                href="https://web.telegram.org./#/login"
                target="blank"
                title="Телеграм"
              >
                <Telegram />
              </a>
            </li>
          </ul>

          {/* </div>      */}
        </div>
      </div>
    </>
  );
}
