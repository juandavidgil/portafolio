import './App.css';

import Navbar from './Pages/Navbar'
import About_me from './Pages/About_Me';
import Projects from './Pages/Projects';

import './App.css'
// Fuentes
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

function App() {


  return (
    <>
      <Navbar />
      <About_me />
      <Projects />
    </>
  )
}

export default App
