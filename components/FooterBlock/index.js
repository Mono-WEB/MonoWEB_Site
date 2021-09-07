import Social from "../Social"

export default function Footer() {
  return (
    <>
    <Social />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="love">
                сделано с любовью
                <span className="love__txt">MonoWEB</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
    .footer {
      margin-top: 150px;
      background-color: #031226;
      width: 100%;
      padding: 40px 0;
      text-align: center;
    }
    
    @media screen and (max-width: 576px) {
        .footer {
            margin-top: 100px;
            padding: 10px 0;
            line-height: 1.1;
        }
    }
    .love {
      font-size: 1.2rem;
      text-transform: lowerCase;
  }
  .love__txt {
    margin-left: 10px;
  }
  
    .love span {
        color: #ff0002;
        text-transform: none;
    }
    
    @media screen and (max-width: 576px) {
        .love {
            font-size: 1.8rem;
        }
    }
  
    `}</style>
    </>
  );
}
