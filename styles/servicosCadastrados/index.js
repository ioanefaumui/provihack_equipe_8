import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #235051;

  div.imgCongrats {
    width: 110px;
    height: 100px;
    position: relative;
    margin: 3em 0 2em;
  }

  h2 {
    margin-bottom: 0.5em;
    font-size: 30px;
  }

  p {
    width: 25%;
    text-align: center;
    margin-bottom: 0.8em;
  }

  a.linkToPage {
    width: 300px;
    font-size: 14px;
    padding: 0.6em 0;
    text-align: center;
    border-radius: 10px;
    background-color: #157d7e;
    color: #dcf0e2;
  }
`;
