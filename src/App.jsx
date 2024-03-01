import React, { Component } from "react";
import Asid from "./components/aside/Asid";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Asid/>
      <Footer/>
      </>
    );
  }
}

export default App;
