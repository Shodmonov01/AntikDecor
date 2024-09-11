import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="AntikDecor" />
    <meta name="robots" content="all" />
    <meta name="googlebot" content="all" />
    <meta
      name="keywords"
      content="AntikDecor, интерьер, интерьерная мастерская, интерьерные магазины, интерьерный дизайн"
    />
  </Helmet>
);

SEO.defaultProps = {
  title: "AntikDecor",
  link: "",
  desc: "AntikDecor - Широкий ассортимент раритетных товаров на нашем сайте по доступным ценам. Бесплатно оформим ваш интерьер!",
};
export default SEO;
