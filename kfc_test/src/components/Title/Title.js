import React from "react";
import Text from "../Text/Text";
import Img from "../Img/Img";
import { Link } from "react-router-dom";

export const Title = ({
  title = "title",
  imgSrc = null,
  showAdditionalContent = true,
}) => {
  return (
    <div className="relative pl-40 pr-40 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Text
            className="text-blue_gray-800 mb-2 mt-2 text-lg uppercase"
            size="txtRubikRomanBold14Bluegray800"
          >
            {title}
          </Text>
          {imgSrc && (
            <Img
              className="h-6 ml-2 object-cover"
              src={imgSrc}
              alt="exploremenuOne"
            />
          )}
        </div>
        <div>
          {showAdditionalContent && (
            <div className="flex flex-row gap-[9px] items-start justify-between w-full">
              <Link to="/explore" className="text-blue-A200">
                <Text size="txtRubikRomanBold14">View All</Text>
              </Link>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-start mt-[5px] pb-[3px] pl-[3px]"
                style={{
                  backgroundImage: "url('images/img_group24.svg')",
                }}
              >
                <Img
                  className="h-2.5 mb-[2px] w-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-10 h-1 bg-red-A400"></div>
    </div>
  );
};
