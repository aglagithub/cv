import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import CVEnglish from "./pages/CVEnglish"
import CVModel from "./pages/CVModel"

function App() {
  return (
    <>
      <main className="font-['Sen'] flex flex-col flex-wrap bg-black">
        <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/en" element={<CVEnglish />}/>
        <Route path="/test" element={<CVModel />}/>

        </Routes>
        
      </main>
    </> 
  );
}

export default App;
