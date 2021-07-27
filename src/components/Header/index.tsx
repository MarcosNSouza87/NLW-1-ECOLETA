import styled from "styled-components";
import logo from "../../assets/logo.svg";
import enterImg from "../../assets/enter.svg";
import IconSearch from "../../assets/search";

import IconProfile from "../../assets/profile";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string | undefined;
  auth: boolean;
};

export default function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <Link to="/" className="lnk-btn">
        <img src={logo} alt="" />
      </Link>
      {props.auth ? (
        <>
          <h1 className="title">{props.title}</h1>
          <div className="menu">
            <Link to="/search" className="lnk-btn app-btn">
              <IconSearch color="" />
            </Link>
            <Link to="/profile" className="lnk-btn app-btn">
              <IconProfile color="" />
            </Link>
          </div>
        </>
      ) : (
        <Link to="/auth/login" className="lnk-btn info">
          <img src={enterImg} alt="" />
          <strong>Entrar</strong>
        </Link>
      )}
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
  .lnk-btn.app-btn {
    display: flex;
    justify-content: center;
    width: 62px;
    height: 62px;
    background-color: ${(props) => props.theme.blocks};
    transition: all 0.15s;
    svg {
      stroke: ${(props) => props.theme.textTitle};
    }
    :hover {
      svg {
        stroke: ${(props) => props.theme.colors.primary};
      }
      background-color: ${(props) => props.theme.colors.secundary};
    }
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
