import styled from "styled-components";

export const Container = styled.div`
  width: 23vw;
  margin: 5em auto;

  h2 {
    color: #235051;
    text-align: center;
    margin-bottom: 2em;
    font-weight: 600;
    font-size: 36px;
  }

  div.userChat {
      display: flex;
      align-items: center;
      border: 1px solid #235051;
      border-bottom: none;
      padding: 0.4em 0.6em;
      border-radius: 10px 10px 0 0;
  }

  div.imgUser{
      width: 30px;
      height: 30px;
      position: relative;
  }

  div.chatText {
    height: 32vh;
    padding: 0.5em;
    border-radius: 0 0 10px 10px;
    border: 1px solid #235051;
    margin: 0 0 0.6em 0;
    overflow-y: auto;
  }

  p.message {
    width: 45%;
    padding: 0.3em 0.5em;
    font-size: 12px;
    margin: 0.2em 0;
    margin-left: ${(props) => (props.author == "me" ? "55%" : "0")};
    border-radius: 10px;
    color: ${(props) => (props.author == "me" ? "#000" : "#F9F9F9")};
    background-color: ${(props) =>
      props.author == "me" ? "#98D7C2" : "#235051"};
  }

  div.chatText::-webkit-scrollbar {
    width: 6px;
  }

  div.chatText::-webkit-scrollbar-track {
    background: transparent; 
  }

  div.chatText::-webkit-scrollbar-thumb {
    background-color: #235051; 
    border-radius: 10px;
    border: 1px solid #FFF;   
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  textarea {
    width: 80%;
    height: 5vh;
    resize: none;
    background-color: transparent;
    padding: 0.5em;
    border-radius: 10px;
    border: 1px solid #235051;
    font-size: 14px;
  }

  form textarea::placeholder {
    font-family: "Poppins", sans-serif;
  }

  form button {
    width: 18%;
    border: none;
    border-radius: 10px;
    color: #dcf0e2;
    background-color: #157d7e;
  }
`;
