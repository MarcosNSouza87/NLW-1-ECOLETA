import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import enterImg from "../../../assets/enter.svg";
import peopleImg from "../../../assets/people.svg";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <div className="content">
        <Header title="" auth={false} />
        <main>
          <div>
            <h1>Seu marketplace de coleta de resíduos.</h1>
            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>

            <Link to="/register" className="lnk-btn register">
              <img src={enterImg} alt="" />
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          </div>
          <div>
            <img src={peopleImg} alt="" />
          </div>
        </main>
      </div>
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items:center;
  

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68vh;

    div {
      display: flex;
      flex-direction: column;
      max-width: 570px;
      gap: 54px;
      h1 {
        padding-top: 45px;
        font-size: 54px;
      }
      p {
        font-size: 24px;
        color: ${(props) => props.theme.text};
        max-width: 448px;
      }
      .lnk-btn.register {
        img {
          background: ${(props) => props.theme.colors.green};
          padding: 20px 20px;
          height: 70px;
        }
        max-width: 360px;
        color: ${(props) => props.theme.background};
        background-color: ${(props) => props.theme.colors.primary};
      }
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
  @media (max-width: 950px) {
    .content {
      min-width: auto;
      padding: 0 20px;
      gap: 30px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
