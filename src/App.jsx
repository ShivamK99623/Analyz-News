// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import FileUpload from './components/FileUpload';
import { Route, Routes } from 'react-router-dom'; // Removed BrowserRouter import

const App = () => {
  return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-4 bg-gray-200">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload-clip" element={<FileUpload />} />
          </Routes>
          </main>
        </div>
        {/* <Footer /> */}
      </div>
  );
};

export default App;