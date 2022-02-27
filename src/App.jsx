import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Carousel } from "./Carousel";
import { Content } from "./Content";
import { Form } from "./Form";
import { Footer } from "./Footer";


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
