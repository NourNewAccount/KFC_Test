import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Img from "../Img/Img";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-3.5 mb-[13px] sm:ml-[0] ml-[29px] sm:mt-0 mt-[27px]"
          src="images/img_group12.svg"
          alt="groupTwelve"
        />

        <Link to="/">
          <Img
            className="h-[19px] mb-[11px] sm:ml-[0] ml-[11px] sm:mt-0 mt-6"
            src="images/img_frame.svg"
            alt="frame"
          />
        </Link>

        <div className="border-2 border-red-A400 border-solid h-[37px] mb-[5px] sm:ml-[0] ml-[19px] sm:mt-0 mt-3 rounded-lg w-[9%]"></div>
        <div className="border-2 border-gray-100_01 border-solid h-[37px] mb-[5px] ml-3.5 sm:ml-[0] sm:mt-0 mt-3 rounded-lg w-[7%]"></div>
        <div className="border-2 border-gray-100_01 border-solid h-[37px] mb-[5px] ml-3.5 sm:ml-[0] sm:mt-0 mt-3 rounded-lg w-[9%]"></div>
        <div className="border-2 border-gray-100_01 border-solid h-[37px] mb-[5px] ml-3.5 sm:ml-[0] sm:mt-0 mt-3 rounded-lg w-[7%]"></div>
        <div className="border-2 border-gray-100_01 border-solid h-[37px] mb-[5px] ml-3.5 sm:ml-[0] sm:mt-0 mt-3 rounded-lg w-[9%]"></div>
        <Button
          className="border-2 border-red-A400 border-solid cursor-pointer font-medium font-rubik leading-[normal] mb-[5px] min-w-[60px] sm:ml-[0] ml-[417px] mr-[115px] sm:mt-0 mt-3 text-center text-sm"
          shape="round"
          color="red_50"
          size="xs"
          variant="fill"
        >
          عربي
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
