import React from "react";
import Img from "../Img/Img";
import Text from "../Text/Text";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue_gray-800 flex items-center justify-center p-1.5 md:px-5 w-[100%]">
        <div className="flex flex-col items-center justify-center  mt-[15px] w-3/4 md:w-full">
          <Img
            className="h-[19px]"
            src="images/img_frame_white_a700.svg"
            alt="frame_Three"
          />
          <Text
            className="mt-[31px] text-center text-gray-400 text-sm"
            size="txtRubikBold14"
          >
            <>
              Items availability, prices, participation, delivery areas and
              charges, purchase
              <br /> requirements for delivery may vary.
            </>
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-[26px] w-full">
            <Text
              className="text-sm text-white-A700"
              size="txtRubikRegular14WhiteA700"
            >
              Menu
            </Text>
            <Text
              className="sm:ml-[0] ml-[100px] text-sm text-white-A700"
              size="txtRubikRegular14WhiteA700"
            >
              Store Locations
            </Text>
            <a
              href="/"
              className="sm:ml-[0] ml-[124px] text-sm text-white-A700"
            >
              <Text size="txtRubikRegular14WhiteA700">Privacy Policy</Text>
            </a>
            <a
              href="/"
            
              className="sm:ml-[0] ml-[95px] text-sm text-white-A700"
            >
              <Text size="txtRubikRegular14WhiteA700">Terms & Conditions</Text>
            </a>
            <Text
              className="sm:ml-[0] ml-[113px] text-sm text-white-A700"
              size="txtRubikRegular14WhiteA700"
            >
              Contact
            </Text>
          </div>
          <Img
            className="h-[19px] mt-[23px]"
            src="images/img_group40.svg"
            alt="groupForty"
          />
          <Text
            className="mt-[29px] text-center text-gray-400 text-sm"
            size="txtRubikRegular14Gray400"
          >
            ©KFC, Inc. All rights reserved.
          </Text>
          <Img
            className="h-[18px] mt-[19px]"
            src="images/img_grid.svg"
            alt="grid_One"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
