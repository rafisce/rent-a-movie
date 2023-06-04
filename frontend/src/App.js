import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RentalsScreen from "./screens/RentalsScreen";
import AcountDialog from "./components/AcountDialog";
import UsersScreen from "./screens/UsersScreen";
import AdminRentalsScreen from "./screens/AdminRentalsScreen";
import AdminRoute from "./components/AdminRoute";
import RentScreen from "./screens/RentScreen";

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

        <header>
          <Navbar onQuery={onQuery} onDialog={toggle} />
        </header>

        <main className="container">
          
          <Routes>
            <Route path="/" element={<HomeScreen query={query} />} />
            <Route path="/rentals" element={<RentalsScreen />} />
            <Route
              path="/user-rentals/:id"
              element={
                <AdminRoute>
                  <AdminRentalsScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/users"
              element={
                <AdminRoute>
                  <UsersScreen />
                </AdminRoute>
              }
            />
            <Route path="/rent/:movieId" element={<RentScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
