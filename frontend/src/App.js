import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import NavBar from "./components/NavBar";
import CartScreen from "./screen/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}  />
        <Route path='/product/:id' element={<ProductScreen/>} />
        <Route path='/cart/:id?' element={<CartScreen/>} />
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
