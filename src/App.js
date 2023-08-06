// import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Moviemain from "./Components/Moviemain";
import Movies from "./Components/Movies";
import Aboutus from "./Components/Aboutus";
import Recommended from "./Components/Recommended";
import Contact from "./Components/Contact";
import { useGlobalContext } from "./Components/context";


function App() {

  const {mode, setMode} = useGlobalContext()
  return (
    <>
  <div className={mode==="dark"? "bg-black text-white md:pl-4 md:pr-4 " : "bg-white text-white md:pl-4 md:pr-4 "}>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="Movies/movie/:id" element={<Moviemain/>}></Route>
      <Route path="/Movies" element={<Movies/>}></Route>
      <Route path="/About" element={<Aboutus/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Recommended" element={<Recommended/>}></Route>




    </Routes>
    </div>

    
    </>
  );
}

export default App;
 