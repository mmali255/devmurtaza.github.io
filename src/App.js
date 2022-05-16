import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import FaceMask from "./projects/ml/FaceMask";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/projects/ml/0" element={<FaceMask />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
