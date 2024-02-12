// import React, { useState } from 'react';

import Section from 'components/SectionWraps/Sections/Section';
import css from './SectionFour.module.css';
import { ReactComponent as Dovn } from 'images/svgMobile/down.svg';
import ButtonSvg from 'components/Button/ButtonSvg';

import {
  useOverlayOne,
  useOverlayTwo,
  useOverlayThree,
  useOverlayFour,
} from 'hooks/Overlay/overlay';

export default function SectionFour() {
  const { stateOverlayOne, toggleOne } = useOverlayOne();
  const { stateOverlayTwo, toggleTwo } = useOverlayTwo();
  const { stateOverlayThree, toggleThree } = useOverlayThree();
  const { stateOverlayFour, toggleFour } = useOverlayFour();

  const rotateBtn = e => {
    const button = e.currentTarget;
    const id = button.getAttribute('id');
    button.classList.toggle('button-rotate');

    switch (id) {
      case '1':
        toggleOne();
        break;

      case '2':
        toggleTwo();
        break;

      case '3':
        toggleThree();
        break;

      case '4':
        toggleFour();
        break;

      default:
        return;
    }
  };

  return (
    <Section typeSection={''} containerSection={'container'} id={'FAQ'}>
      <h4 className={css.title}>FAQ</h4>
      <div className={css.wrapper}>
        <div className={css.wrapperBg}></div>
        <ul className={css.listInformation}>
          <li className={css.listItem}>
            <div className={css.owerlay}>
              <div className={css.divOrignText}>
                <p className={css.textListItem}>
                  Які валюти підтримує ваш обмінник?
                </p>
                <ButtonSvg styles={'btn_svg'} onClick={rotateBtn} id="1">
                  <Dovn width="25" height="25" />
                </ButtonSvg>
              </div>

              <div
                className={`${css.containerOverlay} ${
                  stateOverlayOne ? css.visible1 : ''
                }`}
              >
                <p className={css.textOverlay}>
                  На даний момент на нашому обміннику ви можете купити/продати
                  понад 300 криптовалют. Ми також працюємо над додаванням інших
                  валют, можливість оперувати з якими з'явиться у найближчому
                  майбутньому.
                </p>
              </div>
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.owerlay}>
              <div className={css.divOrignText}>
                <p className={css.textListItem}>
                  Чи легально купляти криптовалюти в Україні?
                </p>
                <ButtonSvg styles={'btn_svg'} onClick={rotateBtn} id="2">
                  <Dovn width="25" height="25" />
                </ButtonSvg>
              </div>

              <div
                className={`${css.containerOverlay} ${
                  stateOverlayTwo ? css.visible2 : ''
                }`}
              >
                <p className={css.textOverlay}>
                  З 15 березня 2022 року в Україні було ухвалено закон «Про
                  цифрові активи». Тепер можна абсолютно законно купувати,
                  продавати, обмінювати крипту, відкривати блокчейн-бізнеси,
                  реєструвати криптосервіси тощо.
                </p>
                <p className={css.textOverlay2}>
                  Це також спричинило впровадження політики оподаткування на
                  виведення цифрових монет. І незважаючи на те, що у зв'язку з
                  повномасштабною війною НБУ ввів обмеження на купівлю крипти,
                  придбати цифрові активи, як і раніше, можна.
                </p>
              </div>
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.owerlay}>
              <div className={css.divOrignText}>
                <p className={css.textListItem}>Як створити криптогаманець?</p>
                <ButtonSvg styles={'btn_svg'} onClick={rotateBtn} id="3">
                  <Dovn width="25" height="25" />
                </ButtonSvg>
              </div>

              <div
                className={`${css.containerOverlay} ${
                  stateOverlayThree ? css.visible3 : ''
                }`}
              >
                <p className={css.textOverlay}>
                  Просто здійсніть реєстрацію на сайті відповідного ресурсу.
                  Процес аналогічний реєстрації у звичайній онлайн-платіжці.
                  Сьогодні є величезна кількість сховищ, але не всі з них
                  однаково надійні. А досвід показує, що безпека гаманця
                  обернено пропорційна його зручності.
                </p>
              </div>
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.owerlay}>
              <div className={css.divOrignText}>
                <p className={css.textListItem}>
                  Чи існують приховані комісії або будь-які інші платежі при
                  користуванні вашим обмінником?
                </p>
                <ButtonSvg styles={'btn_svg'} onClick={rotateBtn} id="4">
                  <Dovn width="25" height="25" />
                </ButtonSvg>
              </div>

              <div
                className={`${css.containerOverlay} ${
                  stateOverlayFour ? css.visible4 : ''
                }`}
              >
                <p className={css.textOverlay}>
                  Ні, ви отримуєте рівно стільки, скільки відображається в полі
                  «Отримуєте».
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
