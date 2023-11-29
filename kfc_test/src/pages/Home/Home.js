import React from "react";

import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import TopDeals from "../../components/TopDeals/TopDeals";
import BestSeller from "../../components/BestSeller/BestSeller";
import MidSection from "../../components/MidSection/MidSection";
import Landing from "../../components/Landing/Landing";

const Home = () => {
  return (
    <div>
      <div
      // style={{ backgroundColor: "green" }}
      // className="pl-40 pr-40 h-[100vh] md:pl-20 md:pr-20 sm:pl-5 sm:pr-5"
      >
        <Landing />
        <ExploreMenu />
        <TopDeals />
        <BestSeller />
        <MidSection />
      </div>
    </div>
  );
};

export default Home;
