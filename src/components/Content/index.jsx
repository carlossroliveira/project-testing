import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./style.module.css";

export const Content = () => {
  const [listOfArrayProducts, setListOfArrayProducts] = useState([]);

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((result) => setListOfArrayProducts(result));
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mais Vendidos</h1>
        <Slider className={styles.content__div} {...settings}>
          {listOfArrayProducts?.map((item) => {
            return (
              <div key={item.productId}>
                <img src={item.imageUrl} alt="Imagem" />
                <div>
                  <h4>{item.productName}</h4>
                  <span>{item.stars}</span>
                  <p>R$: {item.price}</p>
                  <button>Comprar</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
