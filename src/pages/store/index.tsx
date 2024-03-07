import React from "react";

import StoreGallery from "../../components/store-page/StoreGallery";
import StoreHero from "../../components/store-page/StoreHero";
import Title from "../../components/typography/Title";
import Favicons from "../../layout/Favicons";
import Layout from "../../layout/Layout";

const StorePage = () => {
  return (
    <Layout>
      <Title title="Store" />
      <StoreHero />
      <StoreGallery />
    </Layout>
  );
};

export default StorePage;

// SEO Head

export const Head = () => {
  const title = "Store";
  const metaTitle = "Handcrafted by BR";
  const description =
    "Just lovely handcrafted products made in Derbyshire, England";

  return (
    <>
      <title>{`${title} | ${metaTitle}`}</title>
      <meta name="description" content={description}></meta>
      <Favicons />
    </>
  );
};
