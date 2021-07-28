import React from "react";

type IconProps = {
  color: string;
};

export function IconBateries({ color }: IconProps) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10.4902"
        y="8.29541"
        width="34.1364"
        height="46.1818"
        rx="4"
        stroke="#322153"
        strokeWidth="2"
      />
      <path
        d="M18.9543 5.41235C18.9543 2.65093 21.1929 0.412354 23.9543 0.412354H31.1621C33.9236 0.412354 36.1621 2.65093 36.1621 5.41235V9.01625H18.9543V5.41235Z"
        fill={color}
      />
      <path
        d="M19.9543 5.41235C19.9543 3.20322 21.7452 1.41235 23.9543 1.41235H31.1621C33.3713 1.41235 35.1621 3.20321 35.1621 5.41235V8.01625H19.9543V5.41235Z"
        stroke="#322153"
        strokeWidth="2"
      />
      <path
        d="M19.8149 33.8178L27.5584 19.3408V28.0943H35.302L27.5584 42.5713V33.8178H19.8149Z"
        fill={color}
      />
      <path
        d="M19.8149 33.8178L27.5584 19.3408V28.0943H35.302L27.5584 42.5713V33.8178H19.8149Z"
        stroke="#322153"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="10.3506"
        y1="12.3181"
        x2="45.6266"
        y2="12.3181"
        stroke="#322153"
        strokeWidth="2"
      />
      <line
        x1="10.3506"
        y1="50.1753"
        x2="45.6266"
        y2="50.1753"
        stroke="#322153"
        strokeWidth="2"
      />
    </svg>
  );
}
