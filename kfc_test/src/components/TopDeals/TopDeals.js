import React, { useState } from "react";
import { Title } from "../Title/Title";
import DealCard from "../Cards/DealCrad/DealCard";
import List from "../List";

const TopDeals = () => {
  const data = [
    {
      id: 1,
      name: "Wings Meal",
      image: "images/img_571combo1.png",
      price: "31 QAR",
      description: "6pc Wings, Fries, coleslaw, Drink",
    },
    {
      id: 2,
      name: "12 Pc Core Bucket",
      image: "images/img_581combo1.png",
      price: "89 QAR",
      description:
        "12 Pcs of CHICKEN +FAMILY FRIES+LARGE COLESLAW+1.25L+5 BUNS",
    },
    {
      id: 3,
      name: "Mighty Zinger Box",
      image: "images/img_469combo1.png",
      price: "35 QAR",
      description: "Mighty Sandwich + 1Pc Chicken +Fries + Coleslaw + Drink",
    },
    {
      id: 4,
      name: "Twister Charger Combo",
      image: "images/img_439combo1.png",
      price: "21 QAR",
      description: "Twister Charger.Fries.Drink",
    },
    {
      id: 5,
      name: "Twister Charger Combo",
      image: "images/img_439combo1.png",
      price: "21 QAR",
      description: "Twister Charger.Fries.Drink",
    },
    {
      id: 6,
      name: "Twister Charger Combo",
      image: "images/img_439combo1.png",
      price: "21 QAR",
      description: "Twister Charger.Fries.Drink",
    },
    {
      id: 7,
      name: "Twister Charger Combo",
      image: "images/img_439combo1.png",
      price: "21 QAR",
      description: "Twister Charger.Fries.Drink",
    },
    {
      id: 8,
      name: "Twister Charger Combo",
      image: "images/img_439combo1.png",
      price: "21 QAR",
      description: "Twister Charger.Fries.Drink",
    },
  ];

  return (
    <section>
      <Title title="Top Deals" imgSrc="images/img_topdeals1.png" />
      <div className="pl-40 pr-40 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5 pb-8">
        <div className="overflow-x-auto custom-scrollbar overflow-y-hidden">
          <List
            className="flex gap-12 justify-start mt-[11px] w-full items-center"
            orientation="horizontal"
          >
            <DealCard menuItems={data} />
          </List>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
