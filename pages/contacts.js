import Head from "next/head";
import HeaderLayout from "../components/HeaderLayout";
import FeedbackBlock from "../components/FeedbackBlock";
import MapBlock from "../components/MapBlock";

export default function Contacts() {
  return (
    <HeaderLayout>
      <Head>
      <title>Создание сайтов и Landing Page. Полтава/Харьков</title>
      </Head>
      <div className="wrap">
        <div className="page">
          <FeedbackBlock />
          <MapBlock />
        </div>
      </div>
    </HeaderLayout>
  );
}
