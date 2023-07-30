// import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Moviemain from "./Components/Moviemain";

function App() {
  return (
    <>
  <div className="bg-black">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element={<Moviemain/>}></Route>

    </Routes>
    </div>

    
    </>
  );
}

export default App;
 