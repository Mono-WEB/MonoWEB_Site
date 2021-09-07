export default function PriceBlock({data}) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="price">
          <div className="price__header">
            <h3 className="price__title">{data.title}</h3>
            <div className="price__num">{data.coast}</div>
            <ul className="price__elem">
              <li className="price__item">{data.domain}</li>
              <li className="price__item">{data.hosting}</li>
              <li className="price__item">{data.tech}</li>
            </ul>
            <button className="button button--min">{data.order}</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .price {
          margin: 50px 0;
          max-width: 320px;
          height: 450px;
          background-color: #031226;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .price__header {
          width: 100%;
          height: 70px;
          background-color: #ff0002;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        .price__title {
          line-height: 70px;
        }

        .price__num {
          font-size: 3rem;
          font-weight: 500;
          color: #ff0002;
          margin: 50px 0 20px 0;
          text-transform: uppercase;
          text-align: center;
        }

        .price__elem {
          list-style: none;
          padding: 0 50px;
        }

        .price__item {
          font-size: 1.6rem;
          text-transform: lowercase;
        }

        .price--white {
          color: #fff;
        }

        .price--red {
          color: #ff0002;
        }

        .price--bg {
          background-color: #fff;
          color: #ff0002;
        }

        @media screen and (max-width: 992px) {
          .price {
            height: 400px;
          }

          .price__title {
            font-size: 1.5rem;
          }

          .price__num {
            font-size: 2rem;
          }

          .price__elem {
            list-style: none;
            padding: 0 30px;
          }

          .price__item {
            font-size: 1.3rem;
          }
        }

        @media screen and (max-width: 768px) {
          .price {
            height: 500px;
            margin: 30px auto;
            text-align: center;
          }

          .price__title {
            font-size: 2.3rem;
          }

          .price__num {
            font-size: 3rem;
          }

          .price__elem {
            list-style: none;
            padding: 0 30px;
          }

          .price__item {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
