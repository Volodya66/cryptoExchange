import { Swiper, SwiperSlide } from 'swiper/react';

import './Swiper.module.css';

import 'swiper/css';
import 'swiper/css/pagination';

import 'index.css';
import css from './Swiper.module.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function Swipers() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
          width: '50%', // Встановлює ширину панелі прогресу
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1} // Кількість слайдів, які відображаються одночасно
        spaceBetween={32} // Відстань між слайдами
        breakpoints={{
          // Коли ширина екрану менше або рівна 767px, показуємо тільки один слайд
          767: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className={css.wrapper}>
            <p className={css.text}>1</p>
            <p>
              Кваліфікована технічна підтримка готова допомогти у разі проблем.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.wrapper}>
            <p className={css.text}>2</p>
            <p>
              Зрозумілий інтерфейс. Купуйте, продавайте та обмінюйте
              криптовалюту онлайн у будь-який час.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.wrapper}>
            <p className={css.text}>3</p>
            <p>
              Без прихованих комісій та додаткових платежів. Здійснюйте
              транзакції за вигідним курсом з будь-яких банківських карток
              України.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.wrapper}>
            <p className={css.text}>4</p>
            <p>
              Гарантуємо безпечний та конфіденційний обмін. Будьте певні,
              передані вами дані під захистом, а проведення операцій під
              контролем.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
