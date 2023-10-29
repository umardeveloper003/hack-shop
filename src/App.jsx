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

export default App;
