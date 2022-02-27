import React from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";
import { Content } from "./components/Content";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Content />
      <Form />
      <Footer />
    </>
  );
}
