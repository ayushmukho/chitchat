import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Button } from "@chakra-ui/react";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
