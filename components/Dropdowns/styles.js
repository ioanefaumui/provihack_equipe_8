import styled from "styled-components";

export const Container = styled.div`
    width: 11vw;
    position: absolute;
    background-color: #dcf0e2;
    margin: 0.3em 0;
    // border: 1px solid rgba(35, 80, 81, 0.3);
    border-radius: 2px;
    transition:all 0.3s ease-in-out;

    li {
        padding: 0.3em 0;
        width: 100%;
        border-bottom: 1px solid rgba(35, 80, 81, 0.3);
    }

    li a {
        padding: 0.5em;
        font-size: 14px;
    }

    li:hover {
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const ContainerUser = styled.div`
    width: 11vw;
    position: absolute;
    background-color: #dcf0e2;
    margin: 1.7em 0;
    // border: 1px solid rgba(35, 80, 81, 0.3);
    border-radius: 2px;

    li {
        padding: 0.3em 0;
        width: 100%;
        border-bottom: 1px solid rgba(35, 80, 81, 0.3);
    }

    li a {
        padding: 0.5em;
        font-size: 14px;
    }

    li:hover {
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
    }
`;