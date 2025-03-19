
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import RandomColorBox from '../components/Week 27/W27-D1/RandomColorBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Week 27/W28-D2/Navbar';
import MyProfile from './components/Week 27/W28-D2/MyProfile';
import MyProjects from './components/Week 27/W28-D2/MyProjects';
import AboutMe from './components/Week 27/W28-D2/AboutMe';
import NotFound from './components/Week 27/W28-D2/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
