import styled from "styled-components";
import Input from "../../../components/Input";
import ComboBox from '../../../components/ComboBox'
import Sidebar from "../../../components/Sidebar";
import { IconSearch } from "../../../assets/icons";

export default function SearchPage() {
  return (
    <SearchPageContainer>
      <Sidebar>
        <h2>Pesquisar</h2>
        <p>Preencha os campos para Pesquisar novos locais de coleta</p>
        <form>
          <Input
            labelText=""
            placeholderInput="Digite a cidade"
            typeInput="text"
          />
          <Input
            labelText=""
            placeholderInput="Digite o estado"
            typeInput="text"
          />
          <ComboBox/>
          <button className="btn-find" onClick={()=>alert('test')}>
            <div className="btn-img">
              <IconSearch color="" />
            </div>
            <strong>Pesquisar</strong>
          </button>
        </form>
      </Sidebar>
    </SearchPageContainer>
  );
}

const SearchPageContainer = styled.div`
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

  .btn-find {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0;
    background-color: #8257e5;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: "Roboto","Segoe UI";
    div.btn-img {
      display:flex;
      justify-content:center;
      align-items:center;
      width: 62px;
      height: 62px;
      background-color: ${(props) => props.theme.textTitle};
      border-radius: 8px 0 0 8px;
      svg {
        stroke: ${(props) => props.theme.blocks};
      }
    }
    strong {
      letter-spacing: 0.1em;
      font-size: 17px;
      font-weight: bold;
      padding: 0 27px;
    }
    :hover {
      background-color: #7450c8;
      cursor: pointer;
    }
  }
`;
