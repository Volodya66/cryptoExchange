import Section from 'components/SectionWraps/Sections/Section';
import css from './SectionTwo.module.css';
import Swipers from 'components/Swiper/Swiper';
export default function SectionTwo() {
  return (
    <Section typeSection={''} containerSection={'container'} id={'info'}>
      <h3 className={css.title}>Інфо</h3>
      <ul className={css.listBlock}>
        <li className={css.listBlockItem}>
          <div className={css.listLists}>
            <ul className={css.listAdvantages}>
              <li className={css.listItemAdv}>
                <h4 className={css.listItemTile}>300</h4>
                <p className={css.itemText}>Криптовалют</p>
              </li>
              <li className={css.listItemAdv}>
                <h4 className={css.listItemTile}>5000</h4>
                <p className={css.itemText}>Клієнтів</p>
              </li>
              <li className={css.listItemAdv}>
                <h4 className={css.listItemTile}>$34m</h4>
                <p className={css.itemText}>Обіг в рік</p>
              </li>
              <li className={css.listItemAdv}>
                <h4 className={css.listItemTile}>5</h4>
                <p className={css.itemText}>Країн</p>
              </li>
            </ul>
            <ul className={css.listOpt}>
              <li>
                <p className={css.textOpt}>
                  Платформа для швидкого та надійного обміну.
                  <br /> Наш сервіс допомагає вам обмінювати стейблкойни,
                  криптовалюти та фіатні гроші без зайвих клопотів.
                </p>
              </li>
              <li>
                <p className={css.textOpt}>
                  Відсутність прихованих комісій. Сума на екрані – фактична
                  сума, яку заплатить користувач.
                </p>
              </li>
              <li>
                <p className={css.textOpt}>
                  Зручний та простий інтерфейс. Сервіс пропонує зрозумілу та
                  швидку процедуру обміну.
                </p>
              </li>
              <li>
                <p className={css.textOpt}>
                  Вигідні умови. Це завжди хороший курс, низькі комісії,
                  відсутність ризиків та прозорий алгоритм роботи.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className={css.listBlockItem}>
          <div className={css.cryptoWrapperText}>
            <p className={css.textCrypto}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні. Сервіс має бездоганну репутацію та
              пропонує найкращі умови обміну.
            </p>
            <p className={css.textCrypto}>
              Якщо ви вирішите купити криптовалюту онлайн на нашому сервісі, то
              отримаєте професійну та оперативну підтримку, безпеку та простоту.
            </p>
          </div>
        </li>
        <li className={css.listBlockItem}>
          <div>
            {' '}
            <h3 className={css.textCryptoOb}>
              Переваги обміну криптовалюти у нас
            </h3>
            <ul className={css.advantages}>
              <li>
                <div className={css.advantagesWrapperCircle}>
                  <ul className={css.advantagesListCircle}>
                    <li className={css.advantagesItem}>Зручно</li>
                    <li className={css.advantagesItem}>Надійно</li>
                    <li className={css.advantagesItem}>Вигідно</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <ul className={css.listQuality}>
                    <li className={css.listQualityItem}>
                      Кваліфікована технічна підтримка готова допомогти у разі
                      проблем.
                    </li>
                    <li className={css.listQualityItem}>
                      Без прихованих комісій та додаткових платежів. Здійснюйте
                      транзакції за вигідним курсом з будь-яких банківських
                      карток України.
                    </li>
                    <li className={css.listQualityItem}>
                      Зрозумілий інтерфейс. Купуйте, продавайте та обмінюйте
                      криптовалюту онлайн у будь-який час.
                    </li>
                    <li className={css.listQualityItem}>
                      Гарантуємо безпечний та конфіденційний обмін. Будьте
                      певні, передані вами дані під захистом, а проведення
                      операцій під контролем.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <Swipers />
          </div>
        </li>
      </ul>

      {/* 
 <div>
  <ul className={css.listAdvantagesCrypto}>
    <li>
    <p className={css.listItemNumber}>1</p>
    <p>Кваліфікована технічна підтримка готова допомогти у разі проблем.</p>
    </li>
    <li>
    <p className={css.listItemNumber}>2</p>
    <p>Зрозумілий інтерфейс. Купуйте, продавайте та обмінюйте криптовалюту онлайн у будь-який час.</p>
    </li>
    <li>
    <p className={css.listItemNumber}>3</p>
    <p>Без прихованих комісій та додаткових платежів. Здійснюйте транзакції за вигідним курсом з будь-яких банківських карток України.</p>
    </li>
    <li>
    <p className={css.listItemNumber}>4</p>
    <p>Гарантуємо безпечний та конфіденційний обмін. Будьте певні, передані вами дані під захистом, а проведення операцій під контролем.</p>
    </li>
 </ul>
 <p>sdsfsdsfsfdsdf</p>      
 </div> */}
    </Section>
  );
}
