import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <main className="py3">
        <Container>
          <h1>Welcome to ProShop Application</h1>
          <HomeScreen />
        </Container>

      </main>

      <Footer />
    </>
  );
}

export default App;
