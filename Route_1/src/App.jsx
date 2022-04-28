import "./App.css";
import { Navi } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Mens } from "./components/Mens";
import { Womens } from "./components/Womens";
import { Kids } from "./components/Kids";
import { Footer } from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/faq"></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
