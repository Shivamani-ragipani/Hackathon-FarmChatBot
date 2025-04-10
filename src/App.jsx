import React, { useState } from "react";
import ChatBot from "./component/ChatBot";
import LoginPage from "./component/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle actual login logic or API call here if needed
    setIsLoggedIn(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <ChatBot />
        )}
      </div>
    </div>
  );
}

export default App;
