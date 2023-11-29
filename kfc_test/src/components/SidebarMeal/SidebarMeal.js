import React from "react";
import Img from "../Img/Img";
import Text from "../Text/Text";
import PagerIndicator from "../PagerIndicator";

const SidebarMeal = () => {
  return (
    <section>
      <div className="md:h-[332px] h-[373px] md:mt-0 mt-[55px] relative md:w-full">
        <div className="absolute bg-white-A700 bottom-[0] h-[332px] inset-x-[0] mx-auto rounded-tl-[9px] rounded-tr-[9px] w-full"></div>
        <div className="absolute bg-gray-50_01 flex flex-row gap-[21px] inset-x-[0] items-start justify-center mx-auto pb-[9px] px-[9px] rounded-tl-[9px] rounded-tr-[9px] top-[0] w-full">
          <Text
            className="ml-[84px] mt-3 text-blue_gray-800 text-lg"
            size="txtRubikRomanBold18"
          >
            Choose Your Meal
          </Text>
          <PagerIndicator
            className="flex h-4 mr-[17px] w-14"
            count={3}
            activeCss="inline-block cursor-pointer h-4 bg-red-A400 w-[15px]"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer h-4 bg-red-A400 w-3.5"
            selectedWrapperCss="inline-block mx-[3.00px]"
            unselectedWrapperCss="inline-block mx-[3.00px]"
          />
        </div>
        <Img
          className="absolute bottom-[0] h-[317px] left-[19%]"
          src="images/img_group.svg"
          alt="group"
        />
      </div>
    </section>
  );
};

export default SidebarMeal;
