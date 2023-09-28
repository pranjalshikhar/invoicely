import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/:id" element={<ViewPage />} />
        <Route path="/invoice/edit/:id" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
