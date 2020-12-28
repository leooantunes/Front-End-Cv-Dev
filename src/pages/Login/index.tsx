import React from "react";
import {
  LoginContainer,
  SignIn,
  SignUp,
  InputSignUp,
  ButtonSignUp
} from "./styles";

import {ButtonLogin, Input} from '../../components/common/Styled/PaginaPadrao';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <SignIn>
        <h1>Seja Bem Vindo(a)</h1>
        <div className="input-btn">
          <label htmlFor="usuario">Usuário</label>
          <Input placeholder="Digite seu usuário" id="usuario"/>
          <label htmlFor="password">Senha</label>
          <Input placeholder="Digite sua senha" id="password"/>
        </div>
        <ButtonLogin>ENTRAR</ButtonLogin>
      </SignIn>
      <SignUp>
      <h1>Ainda não possui uma conta? <br/> Cadastre-se agora mesmo =)</h1>
        <div className="input-btn">
          <label htmlFor="usuario">Usuário</label>
          <InputSignUp type="text" placeholder="Digite seu usuário" id="usuario"/>
          <label htmlFor="senha">Senha</label>
          <InputSignUp type="password" placeholder="Digite sua senha" id="senha"/>
          <label htmlFor="email">Email</label>
          <InputSignUp type="email" placeholder="Digite seu email" id="email"/>
        </div>
        <ButtonSignUp>CADASTRAR</ButtonSignUp>
      </SignUp>
    </LoginContainer>
  );
};

export default Login;
