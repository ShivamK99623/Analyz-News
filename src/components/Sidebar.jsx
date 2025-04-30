// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-blue-600 text-white w-64 h-full p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/upload-clip" className="hover:underline">Upload News Clip</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;