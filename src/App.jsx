import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ChatBot from "./component/ChatBot";
import LoginPage from "./component/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={"/Login"} />}
      />
      <Route
        path="/login"
        element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
      />
      <Route
        path="/chat"
        element={isLoggedIn ? <ChatBot onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
