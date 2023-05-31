import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RentalsScreen from "./screens/RentalsScreen";
import AcountDialog from "./components/AcountDialog";

const App = () => {
  const [query, setQuery] = useState(null);
  const [open, setOpen] = useState(false);
  const onQuery = (q) => {
    setQuery(q);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {open ? <AcountDialog open={open} onClose={setOpen} /> : null}

        <Navbar onQuery={onQuery} onDialog={toggle} />

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen query={query} />} />
            <Route path="/rentals" element={<RentalsScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
