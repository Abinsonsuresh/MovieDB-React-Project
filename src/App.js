// import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Moviemain from "./Components/Moviemain";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element={<Moviemain/>}></Route>

    </Routes>
    
    </>
  );
}

export default App;
