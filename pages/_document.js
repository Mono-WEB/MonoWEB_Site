import Document, { Html, Head, Main, NextScript } from "next/document";

import Footer from "../components/FooterBlock";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>

        <style jsx global>{`
          html {
            font-size: 15px;
          }
          body {
            margin: 0;
            font-family: "Roboto", sans-serif;
            color: #fff;
            font-size: 1rem;
            background: #081c36;
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          h2 {
            color: #fff;
            font-size: 2.5rem;
            font-weight: 500;
            margin-top: 200px;
            text-transform: uppercase;
            text-align: center;
          }
          h3 {
            font-family: "Roboto", sans-serif;
            font-size: 2rem;
            font-weight: 500;
            margin: 0;
            text-transform: uppercase;
            text-align: center;
          }
          @media screen and (max-width: 992px) {
            h2 {
              font-size: 2.2rem;
            }
          }

          @media screen and (max-width: 576px) {
            h2 {
              font-size: 2rem;
            }
          }
          .love {
            font-size: 1.2rem;
            text-transform: lowerCase;
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
      </Html>
    );
  }
}
