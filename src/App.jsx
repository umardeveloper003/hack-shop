<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import axios from "axios";
import Woman from "./page/Woman";
import Man from "./page/Man";
import Girls from "./page/Girls";
import Boys from "./page/Boys";
import Sale from "./page/Sale";
=======
<<<<<<< HEAD
import React from 'react';

function App() {
  return(
    <div>
            
    </div>
  )
}
=======
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './page/Home';
import axios from 'axios';
import Woman from './page/Woman';
import Man from './page/Man';
import Girls from './page/Girls';
import Boys from './page/Boys';
import Sale from './page/Sale';
>>>>>>> f13a40319503fb2ba42110db29e53b66fc1ba828

const App = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/products")
        .then((res) => setProduct(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home item={product} />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/man" element={<Man />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/sale" element={<Sale />} />
        </Route>
      </Routes>
    </div>
  );
};
>>>>>>> 1db23bc599faad245b73a75bad464499eb6d7063

export default App;
