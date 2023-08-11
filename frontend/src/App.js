import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Product from "./components/Product";
import ProductScreen from "./screen/ProductScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}  />
        <Route path='/product/:id' component={<ProductScreen/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;