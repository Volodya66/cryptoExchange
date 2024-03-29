// import Section from 'components/SectionWraps/Sections/Section';
import css from './Footer.module.css';

import { ReactComponent as Instagram } from 'images/svgMobile/Instagram.svg';
import { ReactComponent as Telegram } from 'images/svgMobile/telegram.svg';
import { ReactComponent as InstagramD } from 'images/svgDesk/InstagramDesk.svg';
import { ReactComponent as TelegramD } from 'images/svgDesk/telegramDesk.svg';

export default function Footer() {
  return (
    <footer className={css.sectionFooter}>
      <div className={css.wrapperContent}>
        <div className={css.wrapperContentMax}>
          <div className={css.textSection}>
            <h4 className={css.titleText}>Crypto Change</h4>
            <p className={css.textOnline}>Онлайн обмінник криптовалют</p>
          </div>
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

            <ul className={css.listIconDesk}>
              <li className={css.f}>
                <a
                  className={css.link}
                  href="https://www.instagram.com/"
                  target="blank"
                  title="Інстаграм"
                >
                  <InstagramD />
                </a>
              </li>
              <li className={css.f}>
                <a
                  className={css.link}
                  href="https://web.telegram.org./#/login"
                  target="blank"
                  title="Телеграм"
                >
                  <TelegramD />
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
          </div>
        </div>
      </div>
      <ul className={css.listFooter}>
        <li className={css.listFooterItem}>Політика конфіденційності</li>
        <li className={css.listFooterItem}>Публічна оферта</li>
        <li className={css.listFooterItem}>© Всі права захищені</li>
      </ul>
    </footer>
  );
}
