import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CartDetails from "./Components/CartDetails";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="cart" element={<CartDetails/>}/>
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
