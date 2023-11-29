import React from "react";
import Img from "../../Img/Img";
import List from "../../List";
import "../../../App.css";

const SellerCard = () => {
  const images = [
    {
      id: 1,
      src: "images/img_superdinnerme.png",
      alt: "superdinnerme",
    },
    {
      id: 2,
      src: "images/img_supermealenglish0610.png",
      alt: "supermealenglish",
    },
    {
      id: 3,
      src: "images/img_twisterboxenglish0508.png",
      alt: "twisterboxenglish",
    },
    {
      id: 4,
      src: "images/img_mightyzingerboxqaten1101.png",
      alt: "mightyzingerbox",
    },
    {
      id: 5,
      src: "images/img_mightyzingerboxqaten1101.png",
      alt: "mightyzingerbox",
    },
    {
      id: 6,
      src: "images/img_mightyzingerboxqaten1101.png",
      alt: "mightyzingerbox",
    },
    {
      id: 7,
      src: "images/img_mightyzingerboxqaten1101.png",
      alt: "mightyzingerbox",
    },
  ];

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <List
        className="flex gap-12 justify-start mt-[11px] w-full"
        orientation="horizontal"
      >
        {images.map((image) => (
          <Img
            key={image.id}
            id={`image-${image.id}`}
            className="common-pointer h-[350px]  object-cover rounded-[17px] flex-shrink-0 pt-4 pb-8"
            src={image.src}
            alt={image.alt}
            // onClick={() => navigate("/")}
          />
        ))}
      </List>
    </div>
  );
};

export default SellerCard;
