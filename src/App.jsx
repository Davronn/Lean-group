import React, { Component } from "react";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Aside/>
      <Footer/>
      </>
    );
  }
}

export default App;
