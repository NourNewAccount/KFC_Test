import React from "react";
import { Title } from "../Title/Title";
import SellerCard from "../Cards/SellerCard/SellerCard";

const BestSeller = () => {
  return (
    <section>
      <Title title="Best Seller" showAdditionalContent={false} />
      <div className="pl-40 pr-40 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5 pb-12">
        <SellerCard />
      </div>
    </section>
  );
};

export default BestSeller;
