import React from "react";
import Text from "../../Text/Text";
import Img from "../../Img/Img";

const MenuCard = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`bg-cover bg-no-repeat flex flex-col h-[220px] justify-end items-center p-7 sm:px-5`}
          style={{
            backgroundImage: `url(${item.image})`,
            width: "220px",
          }}
        >
          <Img
            style={{
              transform: "scale(1.2) translateY(-40px)",
              minWidth: "150px",
            }}
            src={`images/img_ic${item.title.replace(/\s+/g, "")}3x0211.png`}
          />
          <Text
            className={`
              text-blue_gray-800 text-sm transform translate-y-[-20px]`}
            size="txtRubikRomanMedium14"
          >
            {item.title}
          </Text>
        </div>
      ))}
    </>
  );
};

export default MenuCard;
