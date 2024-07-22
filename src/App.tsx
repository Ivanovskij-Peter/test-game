import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./components/HomePage/HomePage";
import Game from "./components/Game/Game";
import ProductPage from "./components/ProductPage/ProductPage";
import QuizPage from "./components/QuizPage/QuizPage";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
