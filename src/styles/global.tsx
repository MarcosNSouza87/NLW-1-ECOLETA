import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/background.svg";
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    background-color: ${(props) => props.theme.background};
    background-image: url(${backgroundImg});
    background-position: top center;
    background-size: 80%;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.textTitle};
    font-family: Ubuntu;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    flex-direction: column;
  }

  .lnk-btn {
      font-size: 16px;
      font-weight: bold;
      height: 62px;
      border-radius: 8px;
      text-decoration: none;
      display: flex;
      align-items: center;
      overflow: hidden;

      strong {
        padding: 20px 35px;
      }
    }
`;
