import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import ender3 from './pictures/ender3.jpg'
import weefun from './pictures/weefun.jpg'
import elegoo from './pictures/elegoo.jpg'
import miniPrinter from './pictures/miniPrinter.jpg'
import flashforge from './pictures/flashforge.jpg'
import anycubic from './pictures/anycubic.jpg'
import tronxy from './pictures/tronxy.jpg'
import mingda from './pictures/mingda.jpg'
import phrozen from './pictures/phrozen.jpg'
import uniqid from "uniqid";

function App() {
  
  const [shoppingCart, setShoppingCart] = useState([])
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Ender 3",
      price: 189,
      picture: ender3,
      volume: '220x220x250mm',
      qty: 1
    },
    {
      id: 2,
      productName: "Weefun Mini",
      price: 149,
      picture: weefun,
      volume: '100x120x100mm',
      qty: 1
    },
    {
      id: 3,
      productName: "Elegoo Resin",
      price: 357,
      picture: elegoo,
      volume: '144x90x175mm',
      qty: 1
    },
    {
      id: 4,
      productName: "Mini Printer",
      price: 110,
      picture: miniPrinter,
      volume: '12x12x12cm',
      qty: 1
    },
    {
      id: 5,
      productName: "Flashforge Adventurer",
      price: 369,
      picture: flashforge,
      volume: '150x150x150mm',
      qty: 1
    },
    {
      id: 6,
      productName: "Anycubic Kobra",
      price: 359,
      picture: anycubic,
      volume: '220x220x250mm',
      qty: 1
    },
    {
      id: 7,
      productName: "Tronxy X5SA",
      price: 399,
      picture: tronxy,
      volume: '330x330x400mm',
      qty: 1
    },
    {
      id: 8,
      productName: "Mingda Magician",
      price: 370,
      picture: mingda,
      volume: '230x230x260mm',
      qty: 1
    },
    {
      id: 9,
      productName: "Phrozen Sonic",
      price: 999,
      picture: phrozen,
      volume: '555x315x600mm',
      qty: 1
    }
  ])

  const addtoCart = (id) => {
    const product = products.find((product) => product.id === id)
    if  (shoppingCart.find(item => item.id === id)) {
      setShoppingCart(shoppingCart.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item))
    } else {
    const updatedCart = [...shoppingCart, product]
    setShoppingCart(updatedCart)}
    console.log(shoppingCart)
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/"
          element={<Home />}>
          </Route>
          <Route path="/catalog/"
          element={<Catalog products={products} addtoCart={addtoCart} />}></Route>
          <Route path="/cart/"
          element={<Cart shoppingCart={shoppingCart}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
