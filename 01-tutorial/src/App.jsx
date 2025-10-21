import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header title="Grocery List" />
      <Content />
      <Footer />
    </>
  );
}

export default App;
