import css from './Hero.module.css';
import Section from 'components/SectionWraps/Sections/Section';
// import Button from "components/Button/Button"

export default function Hero() {
  return (
    <>
      <Section typeSection={'sectionHero'} containerSection={'containerHero'}>
        <div className={css.wrapperHero}>
          <div className={css.wrapperLinearGradient}>
            {/* <div className={css.wrapperTextHero}> */}
            <ul className={css.listBabl}>
              <li>
                <h2 className={css.CC}>Crypto Change</h2>
              </li>
              <li>
                <p className={css.CCText}>Онлайн обмінник криптовалют</p>
              </li>
            </ul>

            <h1 className={css.textHero}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні.
            </h1>
            {/* </div> */}
          </div>
          <div className={css.wrapperBtn}>
            <h1 className={css.textDesk}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні.
            </h1>
            <ul className={css.listBtn}>
              {/* <li><Button styles={"btnHero1"} text={"Обміняти криптовалюту"}/></li> */}
              <li>
                <a href="#userContacts" className={css.btnHero1}>
                  Обміняти криптовалюту
                </a>
              </li>
              <li>
                <a href="#FAQ" className={css.btnHero2}>
                  Дізнатись умови
                </a>
              </li>
              {/* <li><Button styles={"btnHero2"} text={"Дізнатись умови"}/></li> */}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
