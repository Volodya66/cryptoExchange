import Section from "components/SectionWraps/Sections/Section"
import css from "./SectionTwo.module.css"

export default function SectionTwo ()  {

return(
 <Section typeSection={""} containerSection={"container"}>
 <h3 className={css.title}>Інфо</h3>       
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
<p className={css.textCrypto}>Crypto Change – це надійний та простий спосіб здійснювати
операції з криптовалютами в Україні.
Сервіс має бездоганну репутацію та пропонує найкращі умови обміну. 
</p>
<p className={css.textCrypto}>Якщо ви вирішите купити криптовалюту онлайн на нашому сервісі,
 то отримаєте професійну та оперативну підтримку, безпеку та простоту.
 </p>
 <h3 className={css.textCrypto}>Переваги обміну криптовалюти у нас</h3>   
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
 </div>
 
 </Section>
)

}
