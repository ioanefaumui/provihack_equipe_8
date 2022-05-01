import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  color: #235051;
  width: 40%;
  margin: 0 auto;
  text-align: center;

  h1 {
    padding-top: 0.8em;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
  }

  span {
    font-size: 14px;
  }

  form {
    margin-top: 2em;
  }

  form div {
    margin-bottom: 1em;
  }

  form {
    text-align: left;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  form input, textarea {
    width: 250px;
    padding: 0.8em;
    border: 1px solid rgba(130, 130, 130, 0.5);
    background-color: transparent;
    border-radius: 10px;
  }

  form input.smallInput {
    width: 150px;
  }

  form textarea {
      resize: none;
      height: 10vh;
  }
`;
