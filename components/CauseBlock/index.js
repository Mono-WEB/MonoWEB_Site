import Image from "next/image";

import coastImg from "../../assets/img/icons/coast.png";
import timeImg from "../../assets/img/icons/time.png";
import developmentImg from "../../assets/img/icons/development.png";
import browserImg from "../../assets/img/icons/browser.png";
import techImg from "../../assets/img/icons/tech.png";
import qualityImg from "../../assets/img/icons/quality.png";

export default function CauseBlock() {
  return (
    <>
      <section className="cause">
        <div className="container">
          <h2 className="animate__animated animate__backInUp">
            Почему выгодно сотрудничать с нами
          </h2>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={coastImg} alt="" />
                <div className="service__title">Доступные цены</div>
                <div className="service__text">
                  Стараемся чтоб клиенту было выгодно заказать именно у нас.
                  Цены указанные на сайте всегда актуальны
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={timeImg} alt="" />
                <div className="service__title">Минимальные сроки</div>
                <div className="service__text">
                  Предлагаем вам минимальные сроки создания проектов любой
                  сложности по созданому прототипу сайта
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={developmentImg} alt="" />
                <div className="service__title">Постоянное развитие</div>
                <div className="service__text">
                  Регулярные обновления, учитываются пожелания многочисленых
                  пользователей, а так же общие тенденции развития и требования
                  поисковых систем
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={browserImg} alt="" />
                <div className="service__title">Адаптивность</div>
                <div className="service__text">
                  Сайт будет одинаково хорошо смотреться на всех разрешениях и
                  во всех браузерах: Google Chrome, Fifefox, Opera, Internet
                  Explorer, Yandex Browser, Safari
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={techImg} alt="" />
                <div className="service__title">Активная поддержка</div>
                <div className="service__text">
                  Готовы всегда прийти Вам на помощь и в кратчайшие сроки решить
                  все возникшие вопросы. Проводим администрирование, обновление,
                  доработку сайта
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="service">
                <Image className="service__img" src={qualityImg} alt="" />
                <div className="service__title">Высокое качество</div>
                <div className="service__text">
                  Мы разрабатываем сайты по высоким стандартам качества, для нас
                  важна эффективность, высокая скорость загрузки и удобство для
                  пользователей
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .service {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 400px;
          margin: 0 auto;
        }

        .service__img {
          margin-top: 30px;
          width: 120px;
          height: auto;
        }

        .service__title {
          font-size: 2rem;
          color: #ff0002;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .service__text {
          font-size: 1.2rem;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}
