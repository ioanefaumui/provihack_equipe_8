import styled from "styled-components";

export const Button = styled.button`
  div {
    width: 12%;
    height: 24%;
    position: relative;
    margin: 5% auto;
  }
  width: 12vw;
  height: 11vh;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  background-color: ${(props) => props.backgroundColor};
`;
