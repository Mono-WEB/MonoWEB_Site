import Image from "next/image";
import tablet from "../../assets/img/tablet.png";
import android from "../../assets/img/android.png";

export default function TabletBlock() {
  return (
    <>
      <section className="adaptability">
        <div className="container">
          <h2 className="animate__animated animate__backInUp">
            Адаптивность и кроссбраузерность
          </h2>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-8">
              <div className="tablet">
                <Image className="tablet__img" src={tablet} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="mobile">
                <Image className="mobile__img" src={android} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .adaptability {
          margin-top: 300px;
        }

        @media screen and (max-width: 992px) {
          .adaptability {
            margin-top: 200px;
          }

          .adaptability--white {
            max-width: 90%;
            font-size: 1rem;
            margin: 40px auto;
            padding: 12px 0px;
          }
        }

        @media screen and (max-width: 576px) {
          .adaptability {
            margin-top: 100px;
          }
        }

        .tablet__img {
          margin-top: 30px;
          width: 100%;
      }
      `}</style>
    </>
  );
}
