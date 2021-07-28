import { useState } from "react";
import styled from "styled-components";
import VisibleImg from "../../assets/visible";
import NotVisibleImg from "../../assets/notVisible";
type InputProps = {
  labelText: string;
  typeInput: string;
  placeholderInput: string;
};

export default function Input({
  labelText,
  typeInput,
  placeholderInput,
}: InputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <InputConteiner>
      {labelText !== "" && <label htmlFor="">{labelText}</label>}
      {typeInput === "password" ? (
        <InputContent>
          <input
            type={visible ? "text" : typeInput}
            placeholder={placeholderInput}
          />
          <button
            className="btn-input"
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? <NotVisibleImg color="" /> : <VisibleImg color="" />}
          </button>
        </InputContent>
      ) : (
        <InputContent>
          <input type={typeInput} placeholder={placeholderInput} />
        </InputContent>
      )}
    </InputConteiner>
  );
}

const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 8px;
  width: 100%;
  label {
    color: ${(props) => props.theme.textSuport};
    font-family: "Roboto","Segoe UI";
    font-size: 14px;
    font-weight: 400;
  }
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.background};
    padding: 18px 24px;
    border: 1px solid ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  button.btn-input {
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.background};
    padding: 15px;
    svg {
      stroke: ${(props) => props.theme.textSuport};
    }
    :hover {
      cursor: pointer;
    }
  }
`;
