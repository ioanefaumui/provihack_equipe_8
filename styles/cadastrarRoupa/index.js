import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 150px;
`;

export const Main = styled.main`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #235051;
  margin: 0 auto;

  h1 {
    padding-top: 1.6em;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    text-align: center;
  }

  span {
    font-size: 14px;
    margin-bottom: 2em;
  }

  form input,
  textarea {
    width: 300px;
    padding: 1em;
    margin-bottom: 1.6em;
    border: 1px solid rgba(130, 130, 130, 0.5);
    background-color: transparent;
    border-radius: 10px;
  }

  .duplaInputs {
    display: flex;
  }

  .inputsRadio p {
    font-weight: 600;
    margin-left: 0.2em;
  }

  .inputRadio {
    width: 10%;
    padding: 0;
  }

  label {
    font-size: 13px;
  }

  #inputTam {
    width: 4vw;
    margin-left: 0.5em;
  }

  #inputType {
    width: 11.1vw;
  }

  #inputColor,
  #inputMarca {
    width: 7.6vw;
  }

  #inputColor {
    margin-right: 0.5em;
  }

  #inputLocal {
    width: 11.1vw;
  }
`;
