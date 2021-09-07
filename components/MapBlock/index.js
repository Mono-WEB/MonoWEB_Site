export default function MapBlock() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map">
                <iframe
                  className="map__frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.848881326163!2d32.99863731397041!3d50.01393550817947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d65ddeaf7a2047%3A0x5fb9612e5f62c017!2z0KPQvdC40LLQtdGA0LzQsNCz!5e0!3m2!1sru!2sua!4v1537650242504"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .map {
          text-align: center;
        }

        .map__frame {
          width: 100%;
          height: 450px;
          margin-top: 50px;
        }
      `}</style>
    </>
  );
}
