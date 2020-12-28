import styled from 'styled-components';

export const ButtonNavbar = styled.button`
    width: 100px;
    padding: 5px;
    background-color: transparent;
    border: 3px solid #ffffff;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
`

export const ButtonLogin = styled.button`
    background-color: transparent;
        color: #ffffff;
        width: 100%;
        padding: 1rem;
        outline: none;
        cursor: pointer;
        border: 3px solid #ffffff;
        font-weight: bold;
        margin-top: 2rem;
        :hover{
            background-color: #ffffff;
            border: 3px solid #c31432;
            color: #240b36;
            transition: 1s ease-in-out;
        }
`

export const Input = styled.input`
     background-color: transparent;
     width: 100%;
        border: none;
        border-bottom: 1px solid #ffffff;
        outline: none;
        margin-bottom: 1rem;
        color: white;
        border-spacing: 1rem;
        ::placeholder {
            color: #ffffff;
            padding-bottom: 1rem;
        } 
        :focus{
            border-bottom: 3px solid #ffffff;
            transition: 0.2s ease;
            ::placeholder{
                color: transparent;
            }
        }
`