import React from "react";

type IconProps = {
  color: string;
};

export function IconLamps({ color }: IconProps) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.66895 24.6431H17.1332V32.9677H9.66895V24.6431Z"
          stroke="#322153"
          strokeWidth="2"
        />
        <path
          d="M32.7597 12.458C32.4246 13.8249 29.3181 15.3165 29.3181 16.8829V22.7827H54.2694V16.8829C54.2694 15.3165 50.7327 13.8249 50.3977 12.458H32.7597Z"
          fill={color}
        />
        <path
          d="M0.953116 33.2739V37.7146C0.953116 38.3317 0.495262 42.1417 6.94812 44.2926L7.37831 47.304H12.9708H19.4238C19.4238 43.002 24.156 43.002 25.4466 39.5605L25.8211 33.2739H0.953116Z"
          fill={color}
        />
        <path
          d="M48.4129 11.2761V11.6748L48.8017 11.7635C52.1347 12.524 54.6299 15.507 54.6299 19.0634V23.0041H48.0248H47.5248V23.5041V49.2603C47.5248 52.4122 44.9589 54.9773 41.8078 54.9773C38.6566 54.9773 36.0908 52.4122 36.0908 49.2603V23.5041V23.0041H35.5908H28.9856V19.0634C28.9856 15.507 31.4809 12.524 34.8139 11.7635L35.2026 11.6748V11.2761V6.62936C35.2026 5.69523 35.8045 4.89975 36.6469 4.59937L36.9789 4.48096V4.12842V3.07679C36.9789 1.88411 37.9507 0.912354 39.1434 0.912354H44.4722C45.6649 0.912354 46.6367 1.88411 46.6367 3.07679V4.12842V4.48096L46.9687 4.59937C47.811 4.89975 48.4129 5.69523 48.4129 6.62936V11.2761ZM45.3604 4.46493H45.8604V3.96493V3.07679C45.8604 2.31179 45.2387 1.68864 44.4722 1.68864H39.1434C38.3769 1.68864 37.7552 2.31179 37.7552 3.07679V3.96493V4.46493H38.2552H45.3604ZM47.1367 11.5701H47.6367V11.0701V6.62936C47.6367 5.86436 47.015 5.24122 46.2485 5.24122H37.3671C36.6006 5.24122 35.9789 5.86436 35.9789 6.62936V11.0701V11.5701H36.4789H47.1367ZM37.3671 23.0041H36.8671V23.5041V49.2603C36.8671 51.9849 39.0832 54.201 41.8078 54.201C44.5324 54.201 46.7485 51.9849 46.7485 49.2603V23.5041V23.0041H46.2485H44.4722H43.9722V23.5041V49.2603C43.9722 50.453 43.0005 51.4247 41.8078 51.4247C40.6151 51.4247 39.6434 50.453 39.6434 49.2603V23.5041V23.0041H39.1434H37.3671ZM40.9196 23.0041H40.4196V23.5041V49.2603C40.4196 50.0253 41.0413 50.6484 41.8078 50.6484C42.5743 50.6484 43.1959 50.0253 43.1959 49.2603V23.5041V23.0041H42.6959H40.9196ZM29.7619 21.7278V22.2278H30.2619H53.3537H53.8537V21.7278V19.9515V18.1752V17.6752H53.7014C53.0599 14.6364 50.3653 12.3464 47.1367 12.3464H36.4789C33.2503 12.3464 30.5556 14.6364 29.9142 17.6752H29.7619V18.1752V19.9515V21.7278Z"
          fill="#322153"
          stroke="#322153"
        />
        <path
          d="M6.78195 44.7644V44.3232L6.34417 44.2683C3.09156 43.8604 0.564941 41.0751 0.564941 37.7144V32.8855H26.2093V37.7144C26.2093 41.0751 23.6826 43.8604 20.43 44.2683L19.9923 44.3232V44.7644V49.2602C19.9923 50.1944 19.3904 50.9899 18.548 51.2902L18.216 51.4086V51.7612V52.8128C18.216 54.0055 17.2442 54.9772 16.0515 54.9772H10.7227C9.52999 54.9772 8.55824 54.0055 8.55824 52.8128V51.7612V51.4086L8.22618 51.2902C7.38385 50.9899 6.78195 50.1944 6.78195 49.2602V44.7644ZM9.83453 51.4247H9.33453V51.9247V52.8128C9.33453 53.5778 9.95617 54.201 10.7227 54.201H16.0515C16.818 54.201 17.4397 53.5778 17.4397 52.8128V51.9247V51.4247H16.9397H9.83453ZM8.05824 47.8721H7.55824V48.3721V49.2602C7.55824 50.0252 8.17988 50.6484 8.94638 50.6484H17.8278C18.5943 50.6484 19.216 50.0252 19.216 49.2602V48.3721V47.8721H18.716H8.05824ZM25.433 34.1618V33.6618H24.933H1.84123H1.34123V34.1618V35.9381V37.7144C1.34123 40.9294 3.95501 43.5432 7.17009 43.5432H7.55824V46.5958V47.0958H8.05824H18.716H19.216V46.5958V43.5432H19.6041C22.8192 43.5432 25.433 40.9294 25.433 37.7144V35.9381V34.1618Z"
          fill="#322153"
          stroke="#322153"
        />
        <path
          d="M23.9084 12.7775L23.543 13.3151L24.1564 13.5303C25.3522 13.9499 26.2093 15.0733 26.2093 16.399C26.2093 17.7248 25.3522 18.8482 24.1564 19.2677L23.543 19.483L23.9084 20.0206C24.2395 20.5077 24.433 21.0951 24.433 21.7279C24.433 23.411 23.0636 24.7805 21.3804 24.7805H5.39381C3.71065 24.7805 2.34123 23.411 2.34123 21.7279C2.34123 21.0951 2.5347 20.5077 2.86579 20.0206L3.23121 19.483L2.6178 19.2677C1.42204 18.8482 0.564941 17.7248 0.564941 16.399C0.564941 15.0733 1.42204 13.9499 2.6178 13.5303L3.23121 13.3151L2.86579 12.7775C2.5347 12.2903 2.34123 11.703 2.34123 11.0702C2.34123 9.74442 3.19833 8.62099 4.39409 8.20145L5.00749 7.98623L4.64208 7.44859C4.31099 6.96145 4.11752 6.37409 4.11752 5.7413C4.11752 4.05814 5.48694 2.68872 7.17009 2.68872H16.0515C17.7347 2.68872 19.1041 4.05814 19.1041 5.7413C19.1041 6.29246 18.9449 6.80798 18.6782 7.26587L18.2402 8.01759H19.1102H21.3804C23.0636 8.01759 24.433 9.38701 24.433 11.0702C24.433 11.703 24.2395 12.2903 23.9084 12.7775ZM16.0515 3.46501H7.17009C5.9143 3.46501 4.89381 4.48551 4.89381 5.7413C4.89381 6.99709 5.9143 8.01759 7.17009 8.01759H16.0515C17.3073 8.01759 18.3278 6.99709 18.3278 5.7413C18.3278 4.48551 17.3073 3.46501 16.0515 3.46501ZM21.3804 8.79387H5.39381C4.13802 8.79387 3.11752 9.81437 3.11752 11.0702C3.11752 12.326 4.13802 13.3464 5.39381 13.3464H21.3804C22.6362 13.3464 23.6567 12.326 23.6567 11.0702C23.6567 9.81437 22.6362 8.79387 21.3804 8.79387ZM5.39381 24.0042H21.3804C22.6362 24.0042 23.6567 22.9837 23.6567 21.7279C23.6567 20.4721 22.6362 19.4516 21.3804 19.4516H5.39381C4.13802 19.4516 3.11752 20.4721 3.11752 21.7279C3.11752 22.9837 4.13802 24.0042 5.39381 24.0042ZM3.61752 18.6753H23.1567C24.4125 18.6753 25.433 17.6548 25.433 16.399C25.433 15.1432 24.4125 14.1227 23.1567 14.1227H3.61752C2.36173 14.1227 1.34123 15.1432 1.34123 16.399C1.34123 17.6548 2.36173 18.6753 3.61752 18.6753Z"
          fill="#322153"
          stroke="#322153"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            x="0.0649414"
            y="0.412354"
            width="55.0649"
            height="55.0649"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
