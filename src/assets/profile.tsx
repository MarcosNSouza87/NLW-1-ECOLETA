import React from "react";

type IconProps = {
  color:string;
}

export default function IconProfile({color}:IconProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1666 30.625V27.7083C29.1666 26.1612 28.552 24.6775 27.458 23.5835C26.3641 22.4896 24.8803 21.875 23.3332 21.875H11.6666C10.1195 21.875 8.63576 22.4896 7.5418 23.5835C6.44783 24.6775 5.83325 26.1612 5.83325 27.7083V30.625"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5001 16.0417C20.7217 16.0417 23.3334 13.43 23.3334 10.2083C23.3334 6.98667 20.7217 4.375 17.5001 4.375C14.2784 4.375 11.6667 6.98667 11.6667 10.2083C11.6667 13.43 14.2784 16.0417 17.5001 16.0417Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
