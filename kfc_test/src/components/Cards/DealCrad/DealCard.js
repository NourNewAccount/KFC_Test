import React, { useState } from "react";
import Text from "../../Text/Text";
import Img from "../../Img/Img";
import Line from "../../Line/index";
import "../../../App.css";
import ModalCard from "../../ModalCard/ModalCard";

const DealCard = ({ menuItems }) => {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFavoriteClick = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
      console.log("Add to favorites!");
    }
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="h-[450px] w-[260px] relative flex-shrink-0  cursor-pointer "
          onClick={() => handleCardClick(item)}
        >
          <div className="h-[391px] m-auto w-full">
            <Img
              className="mb-[-60px] mx-auto object-cover h-[200px] z-[100] "
              src={item.image}
              alt={item.name}
            />
            <div className="bg-white-A700 flex flex-col items-start justify-end mt-auto mx-auto p-2 rounded-bl-[15px] rounded-br-[15px] rounded-tl-[17px] rounded-tr-[15px] w-full">
              <Text
                className="mt-[55px] text-blue_gray-800 text-sm"
                size="txtRubikRomanBold14Bluegray800"
              >
                {item.name}
              </Text>
              <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[3px] mt-[9px] w-[98%]" />
              <Text
                className="mt-[7px] text-blue_gray-500 text-sm w-[91%] h-[60px] "
                size="txtRubikRomanRegular12"
              >
                {item.description}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-1.5 mt-[54px] w-full ">
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-[37px] items-center justify-end p-3 w-full"
                  style={{
                    backgroundImage: "url('images/img_group25.svg')",
                  }}
                >
                  <Text
                    className="text-[10px] text-blue_gray-800"
                    size="txtRubikRomanBold10"
                  >
                    {item.price}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className={`absolute h-[18px] right-[20px] top-[185px] cursor-pointer ${
              favorites.includes(item.id) ? "bg-red-100" : ""
            }`}
            src="images/img_favorite.svg"
            alt="favorite"
            onClick={() => handleFavoriteClick(item.id)}
          />
        </div>
      ))}

      {showModal && selectedItem && (
        <ModalCard
          isOpen={showModal}
          onClose={closeModal}
          data={selectedItem}
        ></ModalCard>
      )}
    </>
  );
};

export default DealCard;
