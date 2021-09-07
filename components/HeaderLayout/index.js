import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import logo from "../../assets/img/logo.png";

import Footer from "../FooterBlock";

export default function HeaderLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <title>Разработка интернет магазинов, сайтов. Контекстная реклама | MonoWEB</title> */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <header className="header">
        <div className="header__wrapper"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="d-none d-sm-block col-sm-3 col-md-3 col-lg-3">
              <Link href={"/"}>
                <a>
                  <Image className="logo" src={logo} alt="" />
                </a>
              </Link>
            </div>
            <div className="col-9 col-sm-7 col-md-6 col-lg-3">
              <div className="contacts">
                <div className="contacts__block">
                  <Link href="tel:380631628228">
                    <a className="contacts__tel">38 063 162 8228</a>
                  </Link>
                </div>
                <div className="contacts__block">
                  <Link href="mailto:manager@monoweb.com.ua">
                    <a className="contacts__mail">manager@monoweb.com.ua</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3 col-sm-2 col-md-3 col-lg-6">
              <nav className="nav">
                <ul className="nav__block">
                  <li className="nav__item">
                    <Link href="/">
                      <a className="nav__link nav__link--active">Главная</a>
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/portfolio">
                      <a className="nav__link">Портфолио</a>
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/contacts">
                      <a className="nav__link">Контакты</a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="burger">
                <svg className="burger__menu">
                  <use xlinkHref="#burger"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content">{children}</div>
      <Footer />

      <style jsx global>{`
        .header {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          height: 80px;
          background: #031226;
          z-index: 99;
          padding-top: 8px;
        }
        @media screen and (max-width: 576px) {
          .header {
            height: 60px;
          }
        }

        .contacts {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contacts__block {
          text-align: center;
        }
        .contacts__tel {
          font-size: 1.8rem;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s linear;
        }
        .contacts__tel:hover {
          cursor: pointer;
          color: #d9d9d9;
          text-decoration: none;
        }
        .contacts__mail {
          font-size: 1.2rem;
          color: #ff0002;
          text-decoration: none;
          transition: color 0.2s linear;
        }
        .contacts__mail:hover {
          cursor: pointer;
          color: #b30001;
          text-decoration: none;
        }
        @media screen and (max-width: 992px) {
          .contacts__tel {
            font-size: 1.4rem;
          }
          .contacts__mail {
            font-size: 1.1rem;
          }
        }
        @media screen and (max-width: 576px) {
          .contacts__block a {
            line-height: 1;
            padding: 0;
            margin: 0;
          }
        }

        .nav {
          display: flex;
          justify-content: center;
        }
        .nav__block {
          display: flex;
          text-align: center;
        }
        .nav__item {
          list-style: none;
          margin-right: 20px;
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
        }
        .nav__link {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          transition: color 0.1s linear;
        }
        .nav__link:hover {
          color: #ff0002;
          text-decoration: none;
        }
        .nav__link--active {
          color: #ff0002;
        }
        @media screen and (max-width: 768px) {
          .nav {
            display: none;
          }
        }
        .nav__show {
          display: block;
          position: fixed;
          top: 20px;
          left: 100px;
        }
        @media screen and (max-width: 768px) {
          .nav__show {
            left: 50px;
          }
        }
        @media screen and (max-width: 576px) {
          .nav__show {
            left: 5px;
          }
          .nav__link {
            font-size: 0.9rem;
          }
          .nav__item {
            margin-right: 10px;
          }
        }

        .burger {
          fill: #fff;
          justify-content: flex-end;
          display: none;
        }
        .burger__menu {
          width: 40px;
          height: 40px;
        }
        @media screen and (max-width: 768px) {
          .burger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
