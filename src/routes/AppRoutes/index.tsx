import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const AppRoutes: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Home" component={Home}/>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
