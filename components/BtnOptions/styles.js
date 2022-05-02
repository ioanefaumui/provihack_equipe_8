import styled from "styled-components";

export const Content = styled.div`
  width: 10.5vw;
  height: 13vh;
  border: none;
  border-radius: 10px;
  position: relative;
  background-image: url(${props => props.background});
  cursor:pointer;
  transition: transform 0.2s;

  div {
    width: 100%;
    background-image: linear-gradient(to top, #157D7E, rgba(21, 125,126, 0));
    height: 8vh;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    padding-top: 2em;
  }

  div p {
    width: 60%;
    color: #FFF;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin: 0 auto;
    line-height: 1.2;
    text-transform: uppercase;
  }

  :hover {
    transform: scale(1.1, 1.1);
  }
`;
