import styled from 'styled-components'
import {Input,ButtonLogin} from '../../components/common/Styled/PaginaPadrao';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    border-radius: 15px;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        padding: 1rem !important;
        flex-direction: column !important;
    }
`

export const SignIn = styled.div`
    background: linear-gradient(to left, #c31432, #240b36);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    h1{
        color: #ffffff;
        margin-bottom: 2rem;
    }
    .input-btn{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
    }
    label{
        color: #ffffff;  
        margin-bottom: 1rem;  
        font-weight: bold;
    }
`
export const SignUp = styled.div`
    background: #ffffff;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    .input-btn{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
    }
    label{
        color: #240b36;  
        margin-bottom: 1rem;  
        font-weight: bold;
    }
    h1{
        color: #240b36;
        margin-bottom: 2rem;
    }
` 
export const InputSignUp = styled(Input)`
    border-bottom: 1px solid #240b36;
    color: #240b36;
    ::placeholder {
            color: #240b36;
        } 
        :focus{
            border: 2px solid #240b36;
            padding: 1rem;
        }
`

export const InputSignIn = styled(Input)`
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    ::placeholder {
            color: #ffffff;
        } 
        :focus{
            border: 2px solid #ffffff;
            padding: 1rem;
        }
`

export const ButtonSignUp = styled(ButtonLogin)`
        color: #240b36;
        border: 3px solid #240b36;
        :hover{
            background-color: #240b36;
            border: 3px solid #c31432;
            color: #ffffff;
            transition: 0.3s ease-in-out;
        }
`