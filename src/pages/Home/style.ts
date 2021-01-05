import styled from 'styled-components';

export const Navbar = styled.div`
    background: linear-gradient(to left, #c31432, #240b36);
    padding: 1rem;
    position: relative;

    @media only screen and (min-width: 360px) and (max-width: 600px){
        .container-navbar {
            flex-direction: column !important;
        }
        h3{
            margin-bottom: 1rem;
        }
    }

    h3{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #ffffff;
    }

    .container-navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        max-width: 1140px;
        margin: 0 auto;

        svg{
            color: #ffffff;
            width: 50px;
            height: 50px;
            margin-right: 3rem;
        }
    }

    .btn-navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        button{
            margin-right: 1rem;
        }
    }
`

export const Main = styled.main`
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 2rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    h1{
        display: flex;
        align-items: center;
    }
    .icon-edit{
        margin-left: 1rem !important;
        width: 1.3rem !important;
        height: 1.3rem !important;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        flex-direction: column !important;
    }
`
export const ContainerUser = styled.div`
    max-width: 500px;
    color: #ffffff;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        padding: 1rem !important;
    }
    ul{
        list-style: none;
    }
    li{
        margin-top: 1rem;
        font-size: 20px;
    }
    img{
        position: relative;
        background: linear-gradient(to left, #c31432, #240b36);
        border-radius:50%;
        width: 300px;
        height: 300px;
        padding: 3px;
    }
    .link-redes{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        svg{
            width: 30px;
            height: 30px;
        }
    }
    .info-user{
        margin-top: 2rem;
    }
`
export const ContainerSkills = styled.div`
    max-width: 500px;
    position: relative;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        padding: 1rem !important;
    }

    ::before{
        content: "";
        position: absolute;
        border-right: 3px solid;
        border-image: linear-gradient(to bottom, #240b36, #c31432,rgba(0, 0, 0, 0))1 100%; 
        left: -230px;
        top: 0;
        height: 100%;
    }
`

export const InfoUser = styled.div`
    h1{
        margin-bottom: 1rem;
    }
        text-align: justify;
`

export const InfoSkills = styled.div`
    margin-top: 2rem;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        padding: 1rem !important;
    }

    h1{
        margin-bottom: 1rem;
    }
    h3{
        display: flex;
        align-items: center;
    }
    .skill{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        text-align: center;
        svg{
            width: 30px;
            height: 30px;
            margin-right: 1rem;
        }
    }
    .skill-progress{
        background-color: white;
        width:40%;
        border-radius: 13px;
        padding: 3px;
    }
    .skill-progress .css{
        background: linear-gradient(to left, #c31432, #240b36);
        width: 95%;
        height: 20px;
        border-radius: 10px;
    }
    .skill-progress .html{
        background: linear-gradient(to left, #c31432, #240b36);
        width: 90%;
        height: 20px;
        border-radius: 10px;
    }
    .skill-progress .js{
        background: linear-gradient(to left, #c31432, #240b36);
        width: 85%;
        height: 20px;
        border-radius: 10px;
    }
`

export const ExperienciaUser = styled.div`
    margin-top: 2rem;
    @media only screen and (min-width: 360px) and (max-width: 600px){
        padding: 1rem !important;
    }

    .work-local{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        svg{
            margin-right: 1rem;
        }
    }
`