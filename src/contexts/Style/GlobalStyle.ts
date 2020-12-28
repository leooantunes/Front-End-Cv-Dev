import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    // Reset
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
    }
    body{
        background-color: #000000;
        svg{
            color: #c31432; 
        }
    }
`