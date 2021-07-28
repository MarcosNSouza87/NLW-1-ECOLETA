import styled from "styled-components";
import logo from "../../assets/logo.svg";
import enterImg from "../../assets/enter.svg";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/" className="lnk-btn">
        <img src={logo} alt="" />
      </Link>

      <Link to="/auth/login" className="lnk-btn info">
        <img src={enterImg} alt="" />
        <strong>Entrar</strong>
      </Link>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  align-items: center;
  min-width: 1200px;
  display: flex;
  flex-direction: row;
  height: 110px;
  justify-content: space-between;
  .title {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
  .lnk-btn.info {
    img {
      background: #322153;
      padding: 20px 20px;
      height: 70px;
    }
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.colors.info};
  }


  @media (max-width: 1250px) {
    .content {
      min-width: auto;
      padding: 0 20px;
      justify-content: space-between;
      display: flex;
      width: 100%;
    }
  }
`;
