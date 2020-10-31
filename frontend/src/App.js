import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductScreen";

import { Container } from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py3">
        <Container>
          <h1>Welcome to ProShop Application</h1>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductsScreen} />
        </Container>

      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
