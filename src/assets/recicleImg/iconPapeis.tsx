import React from "react";

type IconProps = {
  color: string;
};

export function IconPapeis({ color }: IconProps) {
  return (
    <svg
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.95923" y="7" width="45.0612" height="24" fill={color} />
      <rect
        x="47"
        y="1"
        width="62"
        height="46"
        rx="4"
        transform="rotate(90 47 1)"
        stroke="#322153"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="40"
        x2="26"
        y2="40"
        stroke="#322153"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="45"
        x2="26"
        y2="45"
        stroke="#322153"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="50"
        x2="26"
        y2="50"
        stroke="#322153"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
