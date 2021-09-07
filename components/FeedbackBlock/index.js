import Image from "next/image";
import tel from "../../assets/img/icons/tel.png";
import mail from "../../assets/img/icons/mail.png";

export default function FeedbackBlock() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2>контакты</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="feedback">
                <div className="feedback__img">
                  <Image src={tel} alt="" />
                </div>
                <span className="feedback__txt">+38 063 162 8228</span>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="feedback">
                <div className="feedback__img">
                  <Image src={mail} alt="" />
                </div>
                <span className="feedback__txt">manager@monoweb.com.ua</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .section {
          margin-top: 300px;
        }

        @media screen and (max-width: 768px) {
          .section {
            margin-top: 200px;
          }
        }
        .feedback {
          display: flex;
          margin: 0 auto;
          width: 400px;
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        .feedback__img {
          width: 32px;
        }
        .feedback__txt {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
