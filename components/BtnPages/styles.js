import styled from "styled-components";

export const Button = styled.button`
    width: ${props => props.width};
    padding: 0.6em 0;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
`;
