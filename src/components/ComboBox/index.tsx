import { useCallback, useState } from "react";
import styled from "styled-components";
import arrowDownImg from "../../assets/arrowDown.svg";

const list = [
  { id: 0, value: "lamp", name: "Lampadas" },
  { id: 1, value: "batery", name: "Pilhas e Baterias" },
  { id: 2, value: "paper", name: "Papéis e Papelão" },
  { id: 3, value: "eletronics", name: "Resíduos Eletronicos" },
  { id: 4, value: "organics", name: "Resíduos Orgânicos" },
  { id: 5, value: "oil", name: "Óleo de Cozinha" },
  { id: 6, value: "all", name: "Todos os tipos" },
];
export default function ComboBox() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("all");
  const [cbselectText, setCbSelectText] = useState("");

  const getItemSelect = useCallback(async (itmValue: string) => {
    setOpen((prev) => !prev);
    setSelect(itmValue);
    let nm = list.find((item) => item.value === itmValue);
    if (nm !== undefined) {
      setCbSelectText(nm?.name);
    }
    console.log("setchange");
  }, []);

  console.log("render");

  return (
    <ComboBoxContainer>
      <div className="cb-stat" onClick={() => setOpen((prev) => !prev)}>
        <span>
          {select !== "all"
            ? cbselectText
            : "Selecione o tipo de item da coleta"}
        </span>
        <img src={arrowDownImg} alt="" />
      </div>
      {open && (
        <Submenu>
          {list.map((item) => (
            <div
              key={item.id}
              className="item"
              onClick={() => getItemSelect(item.value)}
            >
              {item.name}
            </div>
          ))}
        </Submenu>
      )}
    </ComboBoxContainer>
  );
}

const ComboBoxContainer = styled.div`
  margin: 5px 0;
  div.cb-stat {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
    padding: 18px 24px;
    :hover {
      cursor: pointer;
    }
  }
`;
const Submenu = styled.div`
  margin: 5px 0;
  display: flex;
  position: absolute;
  width: 400px;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  .item {
    padding: 15px 24px;
    :hover {
      cursor: pointer;
      background-color: #cec7df;
    }
  }
`;
