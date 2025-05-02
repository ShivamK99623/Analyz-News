// import React, { useEffect } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import FileUpload from './pages/FileUpload';
// import Login from './pages/Login';
// import { Route, Routes, Navigate } from 'react-router-dom';

// // Auth wrapper component
// // const ProtectedRoute = ({ children }) => {
// // //   const user = JSON.parse(localStorage.getItem('user'));
  
// // //   if (!user) {
// // //     // Redirect to login if not authenticated
// // //     return <Navigate to="/" replace />;
// // //   }
  
// // //   return children;
// // // };




// // const App = () => {
// //   const user = JSON.parse(localStorage.getItem('user'));
// //   console.log("app",user);
// //   useEffect(() => {
// //     const user = localStorage.getItem("user");
// //     if (user) {
// //       Navigate("/home", { replace: true });
// //     }
// //   }, [user]); // Add navigate to dependency array
// //   return (
// //     <div className="flex flex-col h-screen">
// //       {user ? (
// //         // Authenticated layout
// //         <>
// //           <Header />
// //           <div className="flex flex-grow">
// //             <Sidebar />
// //             <main className="flex-grow p-4 bg-gray-200">
// //               <Routes>
// //                 <Route path="/home" element={<Home />} />
// //                 <Route path="/upload-clip" element={<FileUpload />} />
// //                 <Route path="*" element={<Navigate to="/home" replace />} />
// //               </Routes>
// //             </main>
// //           </div>
// //           <Footer />
// //         </>
// //       ) : (
// //         // Unauthenticated layout (login page only)
// //         <Routes>
// //           <Route path="/" element={<Login />} />
// //           <Route path="*" element={<Navigate to="/" replace />} />
// //         </Routes>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;
// // import React from 'react';
// // import Header from './components/Header';
// // import Sidebar from './components/Sidebar';
// // import Footer from './components/Footer';
// // import Home from './pages/Home';
// // import FileUpload from './pages/FileUpload';
// // import Login from './pages/Login';
// // import { Route, Routes, Navigate } from 'react-router-dom';

// const App = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <div className="flex flex-col h-screen">
//       {user ? (
//         // Authenticated layout
//         <>
//           <Header />
//           <div className="flex flex-grow">
//             <Sidebar />
//             <main className="flex-grow p-4 bg-gray-200">
//               <Routes>
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/upload-clip" element={<FileUpload />} />
//                 <Route path="*" element={<Navigate to="/home" replace />} />
//               </Routes>
//             </main>
//           </div>
//           <Footer />
//         </>
//       ) : (
//         // Unauthenticated layout (login page only)
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FileUpload from './pages/FileUpload';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* {user ? ( */}
        <>
          <Header onLogout={handleLogout} />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow p-4 bg-gray-200">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload-clip" element={<FileUpload />} />
                {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
              </Routes>
            </main>
          </div>
          <Footer />
        </>
      {/* ) : (
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={setUser} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )} */}
    </div>
  );
};

export default App;
