import React from "react";

const sizeClasses = {
  txtNotoSerifBengaliBold24: "font-bold font-notoserifbengali",
  txtNotoSerifBengaliBold16: "font-bold font-notoserifbengali",
  txtNotoSerifBengaliBold18: "font-bold font-notoserifbengali",
  txtRubikRomanBold18: "font-bold font-rubik",
  txtRubikBold16: "font-bold font-rubik",
  txtRubikRomanBold14Bluegray800: "font-bold font-rubik",
  txtRubikRomanBold14: "font-bold font-rubik",
  txtRubikBold14: "font-bold font-rubik",
  txtRubikRegular14WhiteA700: "font-normal font-rubik",
  txtRubikRegular14Gray400: "font-normal font-rubik",
  txtRubikRomanBold10: "font-bold font-rubik",
  txtIbarraRealNovaRomanBold14: "font-bold font-ibarrarealnova",
  txtIbarraRealNovaRomanBold35: "font-bold font-ibarrarealnova",
  txtRubikRegular14: "font-normal font-rubik",
  txtIbarraRealNovaRomanBold45: "font-bold font-ibarrarealnova",
  txtRubikMedium14Bluegray100: "font-medium font-rubik",
  txtRubikRomanMedium14: "font-medium font-rubik",
  txtNotoSerifBengaliBold24Bluegray800: "font-bold font-notoserifbengali",
  txtRubikMedium14: "font-medium font-rubik",
  txtRubikRomanRegular12: "font-normal font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
