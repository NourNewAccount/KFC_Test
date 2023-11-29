import React, { useState } from "react";
import { Title } from "../Title/Title";
import MenuCard from "../Cards/MenuCrad/MenuCard";
import Img from "../Img/Img";
import List from "../List/index";

const ExploreMenu = () => {
  const menuItems = [
    { id: 1, title: "EXCLUSIVE OFFERS", image: "images/img_group19.svg" },
    { id: 2, title: "FOR ONE", image: "images/img_group19.svg" },
    { id: 3, title: "FOR SHARING", image: "images/img_group19.svg" },
    { id: 4, title: "SIDES & DESSERTS", image: "images/img_group19.svg" },
    { id: 5, title: "BEVERAGES", image: "images/img_group19.svg" },
    { id: 6, title: "BEVERAGES", image: "images/img_group19.svg" },
    { id: 7, title: "BEVERAGES", image: "images/img_group19.svg" },
    { id: 8, title: "BEVERAGES", image: "images/img_group19.svg" },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentPage((prevPage) =>
        prevPage === 1 ? totalPages : prevPage - 1
      );
    } else {
      setCurrentPage((prevPage) =>
        prevPage === totalPages ? 1 : prevPage + 1
      );
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section>
      <Title title="Explore Menu" imgSrc="images/img_exploremenu1.png" />

      <div className="flex items-center justify-evenly">
        <Img
          onClick={() => handleArrowClick("left")}
          className="h-5 w-5 cursor-pointer transform rotate-180"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />

        <List
          className="flex justify-start items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-[300px] w-[1200px] overflow-x-hidden"
          orientation="horizontal"
        >
          <MenuCard menuItems={visibleItems} />
        </List>

        <Img
          onClick={() => handleArrowClick("right")}
          className="h-5 w-5 cursor-pointer"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
      </div>
    </section>
  );
};

export default ExploreMenu;
