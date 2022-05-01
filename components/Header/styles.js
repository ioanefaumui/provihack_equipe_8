import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  padding: 1em 0 1em 1.3em;
  font-size: 14px;
  background-color: #dcf0e2;

  .content {
    width: 65%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    margin-bottom: -1px;
    margin-right: 0.4em;
    font-size: 18px;
  }

  svg.iconNotification {
    margin-bottom: -3px;
  }

  .logo {
    width: 5.5vw;
    height: 3.2vh;
    position: relative;
    font-weight: bold;
  }

  ul.navbar {
    width: 100%;
    display: flex;
    color: #235051;
    justify-content: space-between;
  }

  ul li {
    margin-right: 1.6em;
    cursor: pointer;
  }

  ul li.actionsMenu span svg{
    margin-bottom: 1px;
    margin-left: 0.5em;
  }

  ul li.userOption {
    display: flex;
    margin-left: 0.5em;
  }

  ul li.userOption span svg {
    margin-bottom: 1px;
    margin-left: 0.5em;
  }

  ul .userOption .imgUser {
    width: 1.7vw;
    height: 3.2vh;
    position: relative;
    border-radius: 100%;
    margin-right: 0.5em;
    margin-top: -0.3em;
  }

  ul .userOption .imgUser img {
    border-radius: 100%;
  }
`;
