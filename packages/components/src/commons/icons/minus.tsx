import React from "react";

export const DeleteIcon: React.FC<IconProps> = ({ color }) => {
  const strokeColor = color || "#000000";

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.23413793919099 21.36530543827749"
      width="64.46827587838197"
      height="42.73061087655498"
    >
      <g strokeLinecap="round">
        <g transform="translate(10.328380482690363 10.254279948724445) rotate(0 5.7503061807409495 0.3459250291870859)">
          <path
            d="M-0.33 -0.25 C1.51 -0.05, 9.06 0.93, 10.95 1.11 M0.5 0.8 C2.51 0.86, 9.98 0.25, 11.91 0.36"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default DeleteIcon;
