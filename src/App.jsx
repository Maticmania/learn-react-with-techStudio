import "./css/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Hero from "./components/Hero";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MyHooks from "./Hooks/MyHooks";
import FechData from "./Hooks/FechData";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  //jsx

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:ProductId" element={<DetailPage/>}/>
          <Route path="/hook" element={<MyHooks/>}/>
          <Route path="/blog" element={<FechData/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element={<Page404/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
