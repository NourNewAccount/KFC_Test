import React, { useState } from "react";
import Img from "../Img/Img";
import Button from "../Button/Button";
import Input from "../Input";
import "../../App.css";
import { contentTypes } from "./contentTypes";

const ExploreNav = ({ onTabChange, onSearch }) => {
  const tabs = [
    { id: 1, label: "Deals", contentType: contentTypes.DEALS },
    { id: 2, label: "For One", contentType: contentTypes.FOR_ONE },
    { id: 3, label: "For Sharing", contentType: contentTypes.FOR_SHARING },
    {
      id: 4,
      label: "Sides & desserts",
      contentType: contentTypes.SIDES_DESSERTS,
    },
    { id: 5, label: "Beverages", contentType: contentTypes.BEVERAGES },
    { id: 6, label: "Sandwiches", contentType: contentTypes.SANDWICHES },
    { id: 7, label: "My Favorites", contentType: contentTypes.MY_FAVORITES },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab.contentType);
  };

  const handleSearchChange = (e) => {
    console.log(e);
    if (e.target && e.target.value !== undefined) {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query);
    }
  };

  const filteredTabs = tabs.filter((tab) =>
    tab.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-[30px]">
      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[980px] mt-[29px] mx-auto p-1.5 md:px-5 rounded-[12px] w-full ">
        {filteredTabs.map((tab) => (
          <Button
            key={tab.id}
            className={`cursor-pointer font-medium leading-[normal]  ml-3 md:ml-[0] rounded text-center text-[15px] whitespace-nowrap p-8 ${
              selectedTab.id === tab.id
                ? "bg-red-50 text-red-500"
                : "text-gray-400"
            }`}
            size="sm"
            variant="fill"
            onClick={() => handleTabChange(tab)}
          >
            {tab.label}
          </Button>
        ))}
        <div className="bg-gray-50 flex md:flex-1 flex-row items-center justify-between ml-12 md:ml-[0] md:mt-0 my-[5px] p-[7px] rounded w-[16%] md:w-full">
          <Input
            className="text-blue_gray-100 text-sm focus:outline-none w-[92%]"
            size="txtRubikMedium14Bluegray100"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          ></Input>
          <Img
            className="h-[13px]"
            src="images/img_rewind.svg"
            alt="rewind mr-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreNav;
