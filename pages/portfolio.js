import Head from "next/head";
import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";

import studentImg from "../assets/img/portfolio//student.png";
import live2bfitImg from "../assets/img/portfolio/live2bfit.png";
import novaenergiyaImg from "../assets/img/portfolio/novaenergiya.jpg";
import taxi716Img from "../assets/img/portfolio/716.png";
import yellamarketinImg from "../assets/img/portfolio/yellamarketin.jpg";
import verholazImg from "../assets/img/portfolio/verholaz.png";
import comirkaImg from "../assets/img/portfolio/comirka.png";
import capitoneImg from "../assets/img/portfolio/capitone.jpg";

export default function Contacts() {
  return (
    <HeaderLayout>
      <Head>
        <title>Заказать сайт Лубны/Полтава. Продвижение сайтов | MonoWEB</title>
      </Head>
      <div className="page">
        <div className="content">
          <div className="container">
            <h2>наши работы</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={studentImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={live2bfitImg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={novaenergiyaImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={taxi716Img} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={yellamarketinImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={verholazImg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={comirkaImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="portfolio">
                  <div className="portfolio__img">
                    <Image src={capitoneImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .portfolio {
          margin: 20px 0;
        }

        .portfolio__img {
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </HeaderLayout>
  );
}
