import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninModal from "./components/SigninModal";
import RegisterModal from "./components/RegisterModal";

const App = () => {
  const [query, setQuery] = useState(null);

  const onQuery = (q) => {
    setQuery(q);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <RegisterModal />
        <SigninModal />
        <Navbar onQuery={onQuery} />

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen query={query} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
