import styled from "styled-components";

export const Container = styled.div`
  color: #235051;

  h1 {
    width: 30%;
    margin: 1.5em auto 0.5em;
    text-align: center;
    font-weight: 600;
    font-size: 32px;
  }

  ul.tipsList {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  ul.tipsList li {
    margin: 0.5em;
  }

  ul.tipsList div.imgCover {
    width: 18vw;
    height: 24.4vh;
    position: relative;
  }

  ul.tipsList div.imgCover img {
    border-radius: 10px;
  }

  ul.tipsList p {
    margin-left: 0.2em;
  }

  ul.tipsList p.titlePeca {
    width: 18vw;
    font-size: 16px;
    line-height: 1.3;
    margin-top: 0.5em;
    margin-left: 0.2em;
    font-weight: bold;
  }

  .infosProfissa {
      font-size: 14px;
  }
`;
