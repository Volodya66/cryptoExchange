import Section from 'components/SectionWraps/Sections/Section';
import css from './SectionThree.module.css';

export default function SectionThree() {
  return (
    <Section
      typeSection={''}
      containerSection={'container'}
      id="deliveryPoints"
    >
      <h4 className={css.title}>Пункти видачі</h4>
      <div className={css.wrapperContent}>
        <ul className={css.listInformation}>
          <li>
            <p>Видача готівки у всіх великих містах України</p>
          </li>
          <li>
            <p>Головний офіс у центрі Києва</p>
          </li>
          <li>
            <p>Видача і інших містах від 5 000$, в інших країнах від 10 000$</p>
          </li>
        </ul>

        {/* <Button styles={"btnSectionInformation"} text={"Замовити видачу готівки"} /> */}
        <a href="#userContacts" className={css.btnInformation}>
          Замовити видачу готівки
        </a>
      </div>
    </Section>
  );
}
