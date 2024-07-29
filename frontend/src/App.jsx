import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import Lms from "./components/lms";
import Guidex from "./components/guidex";
import Footer from "./components/footer";
import VideoUpload from "./components/VideoUpload";
import Poster from "./components/aiposter";
import Chatbot from "./components/chatbot";
import Crowd from "./components/crowd";
function App() {
  return (
    <>
      <Nav />
      <Chatbot />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lms" element={<Lms />} />
          <Route path="/uploadvideo" element={<VideoUpload />} />
          <Route path="/guidex" element={<Guidex />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/crowd" element={<Crowd />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
