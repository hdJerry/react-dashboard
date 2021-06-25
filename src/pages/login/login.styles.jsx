import styled, {css} from 'styled-components';


export const LoginContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginForm = styled.div `
    width: 350px;
    border-radius: 6px;
    background-color: #07074D;
    padding: 10px;
`;

export const FormGroup = styled.div `
    margin-top: 20px;
    label{
        color: #ccc;
        margin-bottom: 10px;
        text-transform: uppercase;
    }
`;

export const InputOutline = styled.input `
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: transparent;
    color: #fff;
    font-size: 16px;
`;

export const ButtonOutline = styled.button `
    width: 100%;
    height: 50px;
    color: #07074D;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    &:disabled{
        cursor: not-allowed;
    }
`;