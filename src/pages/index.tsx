import React from "react";

import HomeFeatures from "../components/home-page/HomeFeatures";
import HomeHero from "../components/home-page/HomeHero";
import HomeItems from "../components/home-page/HomeItems";
import HomeReminder from "../components/home-page/HomeReminder";
import HomeStory from "../components/home-page/HomeStory";
import Title from "../components/typography/Title";
import Favicons from "../layout/Favicons";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Title title="Handcrafted by BarbaraRuth" />
        <HomeHero />
        <HomeItems />
        <HomeStory />
        <HomeFeatures />
        <HomeReminder />
      </Layout>
    </>
  );
};

export default HomePage;

// SEO Head

export const Head = () => {
  const title = "Home";
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
