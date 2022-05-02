import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 150px;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 52%;
  margin: 70px auto 0;
  padding-bottom: 70px;
  background-color: #f9f9f9;
  color: #235051;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    width: 70%;
    margin: 0.2em auto;
    padding-top: 0.8em;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
  }

  div.infosPost {
    color: #909e9e;
    text-align: center;
  }

  div.infosPost p.referencePost {
    margin: 1em auto;
    font-style: italic;
  }

  div.imgsJeans {
    width: 760px;
    height: 530px;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  div.imgsJeans img {
    border-radius: 10px;
  }

  div.img4jeans {
    height: 800px;
  }

  p,
  ul {
    width: 77%;
    margin: 1.5em auto;
  }

  p#voila {
    font-weight: 600;
  }
`;
