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
        padding-bottom: 1.5em;
    }

    a.backLink {
        text-decoration: underline;
        font-size: 14px;
        color: #157D7E;
    }
`