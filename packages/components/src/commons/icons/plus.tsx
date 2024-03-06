import React from "react";

export const PlusIcon: React.FC<IconProps> = ({ color }) => {
  const strokeColor = color ?? "#343a40";
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.91193801810323 31.37087463832233"
      width="44"
      height="44"
    >
      <g strokeLinecap="round">
        <g transform="translate(16.65511451017801 10.127532737352887) rotate(0 0.09964374116179897 5.538063121543992)">
          <path
            d="M0.09 0.23 C0.18 1.97, 0.04 8.84, 0.07 10.72 M-0.52 -0.13 C-0.48 1.66, -0.51 9.44, -0.43 11.24"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
          />
        </g>
      </g>
      <g strokeLinecap="round">
        <g transform="translate(10.129575892584398 15.704581330290921) rotate(0 6.15070950637255 0.28621703692763134)">
          <path
            d="M-0.13 -0.16 C1.97 -0.01, 10.79 0.56, 12.78 0.68 M0.81 -0.71 C2.85 -0.73, 10.59 -0.55, 12.6 -0.23"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlusIcon;
