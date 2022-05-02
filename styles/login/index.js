import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("landing-page-bg.webp");

  div.content {
    width: 18vw;
    height: 40vh;
    margin: 0 auto;
    padding: 2.6em;
    background-color: #dcf0e2;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div.logo {
    width: 8vw;
    height: 4.2vh;
    position: relative;
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 2.5em;
  }

  form {
    width: 100%;
    margin: 0 auto;
  }

  form input {
    width: 100%;
    background-color: transparent;
    border: 1px solid #235051;
    border-radius: 10px;
    height: 4vh;
    margin-bottom: 0.6em;
    padding: 1em;
  }

  label,
  span {
    display: block;
    color: #235051;
    font-size: 14px;
    margin-bottom: 0.6em;
  }

  span {
    text-decoration: underline;
    font-size: 12px;
  }

  .divPassword {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-top: 1.5em;
  }
`;
