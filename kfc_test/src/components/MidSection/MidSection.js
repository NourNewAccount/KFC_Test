import React from "react";
import Text from "../Text/Text";
import Img from "../Img/Img";

const MidSection = () => {
  return (
    <section className="pl-40 pr-40 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5 pb-12">
      <div
        className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-full"
      >
        {/* image1  */}
        <Img
          className="h-[350px] md:h-auto object-cover rounded-[7px] "
          src="images/img_bannerfavorderen1708.png"
          alt="bannerfavordere"
        />
        {/* the image2 div  */}
        <div className="h-[350px] relative w-[49%] md:w-full">
          {/* alter image  */}
          <Img
            className="absolute h-[350px] inset-[0] justify-center m-auto object-cover rounded-[7px] w-full"
            src="images/img_bannerpickupen05084.png"
            alt="bannerpickupenZero"
          />
          {/* start image2 */}
          <div className="absolute md:h-[296px] sm:h-[308px] h-[350px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[296px] sm:h-[308px] h-[309px] m-auto w-full">
              <div className="absolute bg-white-A700 h-[350px] flex flex-col md:gap-10 gap-[189px] h-full inset-[0] justify-center m-auto pb-[15px] px-[15px] rounded-lg w-full">
                <Img
                  className="h-[21px] mt-[-100px] mr-[490px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="bottom-[0] md:ml-[0]   text-red-A400 z-[2] "
                  style={{ transform: "translateX(50px) translateY(50px)" }}
                  size="txtNotoSerifBengaliBold16"
                >
                  Mighty Zinger Box
                </Text>
              </div>

              <div className="absolute bottom-[0] flex flex-col h-[296px] items-center justify-start right-[0] w-[296px]">
                <Img
                  className="h-[296px] md:h-auto object-cover w-[296px]"
                  src="images/img_469combo1.png"
                  alt="469comboTwo"
                />
              </div>
            </div>

            {/* clock part */}
            <div className="absolute h-40 md:h-[131px] left-[3%] top-[12%] w-[42%]  h-[280px]">
              <div className="flex flex-col m-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[169px] items-end justify-end p-2"
                  style={{
                    backgroundImage: "url('images/img_group30.svg')",
                  }}
                >
                  <Text
                    className="mt-[75px] text-3xl md:text-[22px] text-white-A700 sm:text-xl "
                    size="txtNotoSerifBengaliBold24"
                  >
                    Limited time
                  </Text>
                </div>
                <Text
                  className="ml-[13px] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl z-[1]"
                  size="txtNotoSerifBengaliBold24Bluegray800"
                >
                  OFFER
                </Text>
                <Img
                  className="h-[28px] mb-[7px] ml-auto mt-[-33px]  object-cover z-[1]"
                  src="images/img_frame_black_900.png"
                  alt="frame_Two"
                />
              </div>
              <Text
                className="absolute bottom-[29%] right-[12%] text-lg text-white-A700 z-[5]"
                size="txtNotoSerifBengaliBold18"
              >
                UP TO 50%
              </Text>
            </div>
          </div>
          {/* end image2 */}
        </div>
      </div>
      <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between mt-12 w-full">
        {/* image4 start  */}
        <div className="h-[350px] relative w-[48%] md:w-full">
          <div className="h-[350px] absolute bg-white-A700  flex flex-col md:gap-10 gap-[62px] inset-x-[0] items-start justify-end mx-auto pt-[22px] sm:px-5 px-[22px] rounded-lg w-full">
            <div className="flex flex-col gap-[7px] items-center justify-center mt-[55px] ml-[40px]">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[45px] text-blue_gray-800 text-center "
                size="txtIbarraRealNovaRomanBold35"
                style={{ lineHeight: "50px" }}
              >
                <>
                  Twister
                  <br /> Box
                </>
              </Text>
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-blue_gray-800"
                style={{ lineHeight: "40px" }}
                size="txtIbarraRealNovaRomanBold45"
              >
                Meal
              </Text>
            </div>
            <Img
              className="h-[19px] ml-0.5 md:ml-[0]"
              src="images/img_television_red_a400.svg"
              alt="television_One"
            />
          </div>

          <div className="absolute h-[350px] inset-y-[0] my-auto right-[0] w-[347px]">
            <Img
              className="h-[350px] m-auto object-cover"
              src="images/img_460combo1.png"
              alt="460comboOne"
            />
            <Text
              className="absolute bg-red-A400 h-11 justify-center left-[5%] pb-2.5 pt-[15px] px-[3px] rounded-[50%] text-sm text-white-A700 top-[10%] w-11 text-center"
              size="txtIbarraRealNovaRomanBold14"
            >
              NEW
            </Text>
          </div>
        </div>
        {/* image4 end    */}

        {/* image3 Start  */}
        <div className="h-[310px] md:mt-0 mt-[20px] relative w-[48%] md:w-full">
          <Img
            className="absolute h-[310px] inset-[0] justify-center m-auto object-cover rounded-[7px] w-full"
            src="images/img_image7.png"
            alt="imageSeven"
          />
          <div className="absolute bg-red-A400 h-[350px] inset-[0] justify-center m-auto pr-[9px] rounded-lg w-full">
            <Img
              className="h-[19px] ml-auto mr-[26px]"
              src="images/img_grid.svg"
              alt="grid_One"
            />
            <div className="absolute flex inset-[0] justify-center m-auto w-[99%] sm:w-full">
              <div className="flex flex-col items-center justify-start my-auto w-[69%]">
                <Img
                  className="h-[350px] md:h-auto object-cover w-full mr-[6px]"
                  src="images/img_1187031.png"
                  alt="1187031"
                />
              </div>
              <Img
                className="h-[80px] mt-[105px] z-[1] mr-[25px]"
                src="images/img_frame_white_a700.svg"
                alt="frame_Three"
              />
            </div>
          </div>
        </div>
        {/* image3 end */}
      </div>
    </section>
  );
};

export default MidSection;
