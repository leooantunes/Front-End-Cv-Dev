import React from "react";
import { AuthProvider } from "./contexts/auth";
import { GlobalStyle } from "./contexts/Style/GlobalStyle";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
