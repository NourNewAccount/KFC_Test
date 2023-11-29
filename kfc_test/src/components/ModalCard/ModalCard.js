import React from "react";
import Modal from "react-modal";
import Text from "../Text/Text";
import Img from "../Img/Img";
import Button from "../Button/Button";

const ModalCard = ({ isOpen, onClose, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          display: "flex",
          alignItems: "center",
          margin: "auto",
          padding: "0",
          justifyContent: "center",
          backgroundColor: "transparent",
          border: "none",
          height: "730px",
        },
      }}
    >
      <div className="sm:h-[1001px] h-[589px] md:h-[609px] mb-5 relative w-[44%] sm:w-full bg-white-A700 rounded-[44px]">
        <Button
          className="absolute top-[-50px] right-[48%] text-white cursor-pointer bg-white-A700 px-[10px] pb-[3px] rounded-[10px]"
          onClick={onClose}
        >
          x
        </Button>
        <div className="h-[589px] sm:h-[981px] m-auto w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-center p-0.5 rounded-tl-[44px] rounded-tr-[44px] w-full">
                <div className="bg-red-A400 h-[25px] mb-[152px] sm:ml-[0] ml-[227px] w-[5%]"></div>
                <div className="bg-red-A400 h-[25px] mb-[152px] ml-2 sm:ml-[0] w-[5%]"></div>
                <div className="bg-red-A400 h-[25px] mb-[152px] ml-2 sm:ml-[0] mr-[225px] w-[5%]"></div>
              </div>
              <div className="bg-gray-100 h-[406px] rotate-[180deg] rounded-tl-[44px] rounded-tr-[44px] w-full"></div>
            </div>
          </div>
          <div className="absolute bg-white-A700 bottom-[13%] flex flex-col gap-[17px] inset-x-[0] items-center justify-center mx-auto p-[90px] md:px-10 sm:px-5 rounded-lg">
            <Text
              className="mt-[27px] text-base text-blue_gray-800"
              size="txtRubikBold16"
            >
              {data.name}
            </Text>
            <Text
              className="mb-[70px] text-blue_gray-500 text-xs"
              size="txtRubikRomanRegular12"
            >
              {data.description}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[205px] h-max inset-[0] items-center justify-center m-auto w-[64%]">
          <Img
            className="h-[222px] md:h-auto object-cover w-[222px]"
            src={data.image}
            alt={data.name}
          />
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[350px] text-center text-sm"
            shape="round"
            color="red_A400"
            size="md"
            variant="fill"
          >
            {data.price}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
