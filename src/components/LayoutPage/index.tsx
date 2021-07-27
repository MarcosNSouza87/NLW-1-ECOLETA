import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";

type LayoutProp = {
  children:ReactNode;
  title:string;
  auth:boolean;
}

export default function Layout({children,title,auth}:LayoutProp) {
  return (
    <Container>
      <div className="content">
        <Header title={title} auth={auth} />
        <BlockMain>
          {children}
        </BlockMain>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BlockMain = styled.div`
  padding: 18px 28px;
  height: 85vh;
  border-radius: 8px;

  background-color: ${(props) => props.theme.blocks};
`;
