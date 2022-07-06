import React from "react";
import UploadFile from './components/UploadFile';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import ShowResults from './components/ShowResults';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="results" element={<ShowResults />} />
      </Routes>
    </div>
  );
}

export default App;

