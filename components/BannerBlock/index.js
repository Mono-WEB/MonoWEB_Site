import Image from "next/image";
import imgbanner from "../../assets/img/imgbanner.png";

export default function BannerBlock() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
              <div className="biglogo">
                <div className="logohead">
                  <Image
                    className="logohead__img"
                    src={imgbanner}
                    alt="BigLogo"
                  />
                </div>
                <div className="logotext">
                  <h1 className="logotext__title">Создание сайтов</h1>
                  <div className="logotext__text">Landing Page</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-5">
              <form
                className="form"
                encType="multipart/form-data"
                method="post"
                id="form"
                // onSubmit="send(event, 'send.php')"
              >
                <div className="form__row form__logo">Связаться с нами</div>
                <div className="form__row">
                  <input
                    className="form__input"
                    name="name"
                    placeholder="Введите имя"
                    type="text"
                  />
                </div>
                <div className="form__row">
                  <input
                    className="form__input"
                    name="email"
                    placeholder="Введите почту"
                    type="text"
                  />
                </div>
                <button className="form__submit button">отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <style>{`
  .banner {
    display: flex;
    align-items: center;
    height: 100vh;
    margin-top: 100px;
  }

  @media screen and (max-width: 768px) {
    .banner {
      margin-top: 200px;
      height: auto;
    }
  }

  .biglogo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logohead__img {
    width: 100%;
    height: auto;
  }

  .logotext {
    text-align: center;
    text-transform: uppercase;
  }

  .logotext__title {
    margin: 0;
    font-size: 2.5rem;
    color: #ff0002;
    margin-top: 20px;
    font-weight: 500;
  }

  .logotext__text {
    margin-top: 20px;
    font-size: 2rem;
  }

  @media screen and (max-width: 992px) {
    .logotext__title {
      margin: 0;
      font-size: 2.1rem;
      margin-top: 20px;
    }

    .logotext__text {
      margin-top: 20px;
      font-size: 1.8rem;
    }
  }

  .form {
    width: 100%;
    max-width: 400px;
    padding: 2rem 2rem 5rem 2rem;
    position: relative;
    border-radius: 3px;
    border: 1px solid #b12816;
    box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
    background: #ff0002;
    background: linear-gradient(
      to right,
      #ff0002 0%,
      #ff0002 29%,
      #ff0002 50%,
      #ff0002 71%,
      #ff0002 100%
    );
  }

  .form ::-moz-placeholder {
    color: #ffffff;
  }

  .form :-ms-input-placeholder {
    color: #ffffff;
  }

  .form ::placeholder {
    color: #ffffff;
  }

  .form__row {
    margin-bottom: 1rem;
  }

  .form__logo {
    margin-bottom: 30px;
    color: #fff;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .form__input {
    flex: 1;
    padding: 0.8rem 2rem;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 1.1rem;
    font-family: Open Sans, Arial, sans-serif;
    text-shadow: 1px 1px 1px #232323;
    border-radius: 25px;
    background: linear-gradient(to bottom, #bc3220 0%, #fa5846 100%);
  }

  .form__input:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    .form {
      max-width: 100%;
      margin: 30px 0 50px 0;
    }
  }

  @media screen and (max-width: 576) {
    .form {
      max-width: 100%;
    }
  }

  .button {
    border: none;
    width: 100%;
    padding: 15px 30px;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    border-radius: 10px;
    background: #081c36;
    color: #fff;
    font-size: 1.2rem;
    box-shadow: 0 0 15px #081c36;
    margin-top: 30px;
  }

  .button--min {
    max-width: 80%;
    display: block;
    margin: 40px auto;
    background: #ff0002;
  }

  .button--white {
    background: #ffffff;
    color: #050801;
    box-shadow: 0 0 5px #ffffff, 0 0 25px #ffffff, 0 0 50px #ffffff,
      0 0 200px #ffffff;
    max-width: 80%;
    display: block;
    margin: 40px auto;
  }

  .button:hover {
    background: #ffffff;
    color: #050801;
    box-shadow: 0 0 5px #ffffff, 0 0 25px #ffffff, 0 0 50px #ffffff,
      0 0 200px #ffffff;
  }

  .button:active,
  .button:visited,
  .button:focus {
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    .button {
      padding: 10px 10px;
    }

    .button--white {
      max-width: 90%;
      font-size: 1rem;
      margin: 40px auto;
      padding: 12px 0px;
    }
  }

  @media screen and (max-width: 768px) {
    .button {
      font-size: 2rem;
    }

    .button--white {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    .cause {
        margin-top: 300px;
    }
  }
  `}</style>
    </>
  );
}
