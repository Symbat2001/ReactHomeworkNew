import React from 'react';
import Test from './components/Week 27/W30-D2/Test';
import LanProvider from './components/Week 27/W30-D2/LanProvider';
import './App.css'

export default function App() {
  return (
    <LanProvider>
      <div className='bordered'>
        <h1> HomeWork useContext</h1>
        <Test />
      </div>
    </LanProvider>
  );
} 




























// import React from 'react'
// import './App.css'
// import ValidationHW from './components/Week 27/W29-D1/ValidationHW'

// export default function App() {
//   return (
//     <div>
//       <ValidationHW/>
//     </div>
//   )
// }























// import React, { useState } from "react";
// import './App.css'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from "./components/Week 27/W28-D4/ProtectedRoute";
// import Login from "./components/Week 27/W28-D4/Login";
// import Register from "./components/Week 27/W28-D4/Register";
// import Main from "./components/Week 27/W28-D4/Main";
// import Projects from "./components/Week 27/W28-D4/Projects";
// import ProjectDetail from "./components/Week 27/W28-D4/ProjectDetail";


// function App() {
//   const [isAuth, setIsAuth] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//         <Route path="/login/register" element={<Register />} />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute isAuth={isAuth}>
//               <Main />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <ProtectedRoute isAuth={isAuth}>
//               <Projects />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/projects/:id"
//           element={
//             <ProtectedRoute isAuth={isAuth}>
//               <ProjectDetail />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;








// Basqa ui jumystary
// import './App.css'
// import RandomColorBox from '../components/Week 27/W27-D1/RandomColorBox';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Week 27/W28-D2/Navbar';
// import MyProfile from './components/Week 27/W28-D2/MyProfile';
// import MyProjects from './components/Week 27/W28-D2/MyProjects';
// import AboutMe from './components/Week 27/W28-D2/AboutMe';
// import NotFound from './components/Week 27/W28-D2/NotFound';


// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<MyProfile />} />
//         <Route path="/projects" element={<MyProjects />} />
//         <Route path="/about" element={<AboutMe/>} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
