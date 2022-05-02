import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  width: 26%;
  margin: 0 auto;
  text-align: center;
  color: #235051;
  margin-top: 3em;

  h2 {
    font-weight: 600;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin-top: 1em;
  }

  div.btns {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5em;
    padding-bottom: 2em;
  }

  a.backLink {
    text-decoration: underline;
    font-size: 14px;
    color: #157d7e;
  }
`;

export const ContentBlog = styled.section`
  h4 {
    text-align: center;
    font-weight: 600;
    color: #235051;
    margin: 2em 0 1em;
  }

  div.chamadasBlog {
    width: 55%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  div.divLink {
    text-align: center;
    margin-top: 2em;
  }

  a.seeMorelink {
    text-decoration: underline;
    font-size: 14px;
    color: #235051;
  }
`;
