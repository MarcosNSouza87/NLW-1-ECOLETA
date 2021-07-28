import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoApp from "../../assets/logoApp";
import {
  IconHome,
  IconSearch,
  IconProfile,
  IconArrowLeft
} from "../../assets/icons";
type SidebarAppProps = {
  children: ReactNode;
};

export default function SidebarApp({ children }: SidebarAppProps) {
  
  return (
    <SidebarAppContainer>
      <div className="header-logo">
        <LogoApp color_primary="#E1FAEC" color_secondary="#ffffff" />

      </div>
      <main className="body-sidebar">{children}</main>
      <nav className="navigator">
        <Link to="/home">
          <IconHome color="" />
        </Link>
        <Link to="/search">
          <IconSearch color="" />
        </Link>
        <Link to="/profile">
          <IconProfile color="" />
        </Link>
        <Link to="/">
          <IconArrowLeft color="" />
        </Link>
      </nav>
    </SidebarAppContainer>
  );
}

const SidebarAppContainer = styled.aside`
  display: grid;
  grid-template-rows: 80px 1fr 100px;
  width: 440px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  div.header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main.body-sidebar {
    padding: 20px;

    h1 {
      font-size: 34px;
      font-weight: bold;
    }
    h2 {
      color: #fff;
    }
    p {
      color: ${(props) => props.theme.text};
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }
  nav.navigator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #29a361;
      width: 62px;
      height: 62px;
      transition: all 0.2s;
      :hover {
        background-color: #29a361;
        svg {
          stroke: ${(props) => props.theme.blocks};
        }
      }
      svg {
        stroke: ${(props) => props.theme.blocks};
      }
    }
  }
`;
