type IconProps = {
  color: string;
};

export function IconMenuSide({ color }: IconProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4998 18.9583C18.3053 18.9583 18.9582 18.3054 18.9582 17.5C18.9582 16.6946 18.3053 16.0417 17.4998 16.0417C16.6944 16.0417 16.0415 16.6946 16.0415 17.5C16.0415 18.3054 16.6944 18.9583 17.4998 18.9583Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4998 8.75001C18.3053 8.75001 18.9582 8.09709 18.9582 7.29168C18.9582 6.48626 18.3053 5.83334 17.4998 5.83334C16.6944 5.83334 16.0415 6.48626 16.0415 7.29168C16.0415 8.09709 16.6944 8.75001 17.4998 8.75001Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4998 29.1667C18.3053 29.1667 18.9582 28.5137 18.9582 27.7083C18.9582 26.9029 18.3053 26.25 17.4998 26.25C16.6944 26.25 16.0415 26.9029 16.0415 27.7083C16.0415 28.5137 16.6944 29.1667 17.4998 29.1667Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
