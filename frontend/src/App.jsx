import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
function App() {
  return (
    <>
    <Nav></Nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
