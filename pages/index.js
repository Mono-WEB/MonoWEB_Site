import { v4 } from "uuid";

import HeaderLayout from "../components/HeaderLayout";
import BannerBlock from "../components/BannerBlock";
import CauseBlock from "../components/CauseBlock";
import PriceBlock from "../components/PriceBlock";
import TabletBlock from "../components/TabletBlock"

function index() {
  const priceBlock = [
    {
      title: "Landing page",
      coast: "не дорого",
      domain: "домен",
      hosting: "Хостинг",
      tech: "Техподдержка",
      order: "Заказать",
    },
    {
      title: "Бизнес сайт",
      coast: "дороже",
      domain: "домен",
      hosting: "Хостинг",
      tech: "Техподдержка",
      order: "Заказать",
    },
    {
      title: "Веб портал",
      coast: "дорого",
      domain: "домен",
      hosting: "Хостинг",
      tech: "Техподдержка",
      order: "Заказать",
    },
  ];
  return (
    <HeaderLayout>
      <div className="page">
        <BannerBlock />
        <CauseBlock />
        <div className="container">
          <h2 className="animate__animated animate__backInUp">
            Цены на услуги
          </h2>
          <div className="row">
            {priceBlock.map((item) => (
              <PriceBlock key={v4()} data={item} />
            ))}
          </div>
        </div>
        <TabletBlock />
      </div>
    </HeaderLayout>
  );
}

export default index;
