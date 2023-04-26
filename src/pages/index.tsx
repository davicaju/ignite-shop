import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import tShirtImage from "../assets/tshirts/1.png";
import tShirtImage2 from "../assets/tshirts/2.png";
import tShirtImage3 from "../assets/tshirts/3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tShirtImage} width={520} height={480} alt="" />

        <footer>
          <strong>T Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirtImage2} width={520} height={480} alt="" />
        <footer>
          <strong>T Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tShirtImage3} width={520} height={480} alt="" />
        <footer>
          <strong>T Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tShirtImage3} width={520} height={480} alt="" />
        <footer>
          <strong>T Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
