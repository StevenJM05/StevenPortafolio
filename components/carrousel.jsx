'use client'
import Image from "next/image";
import Styles from "@/app/styles/carrousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    name: "JavaScript",
    image: "/icons/icons8-javascript-64.png",
  },
  {
    name: "Laravel",
    image: "/icons/icons8-laravel-64.png",
  },
  {
    name: "React",
    image: "/icons/icons8-reaccionar-64.png",
  },
  {
    name: "PHP",
    image: "/icons/icons8-php-64.png",
  },
  {
    name: "C#",
    image: "/icons/icons8-c-sharp-logotipo-64.png",
  },
  {
    name: "SQL",
    image: "/icons/icons8-sql-64.png",
  },
  {
    name: "MongoDB",
    image: "/icons/icons8-mongo-db-64.png",
  },
  {
    name: "Java",
    image: "/icons/icons8-logotipo-de-java-coffee-cup-64.png",
  },
];

var settings = {
  autoplay: true,
  infinite: true,
  speed: 1500,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

export default function carrousel() {
  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => {
          return (
            <div key={index} className={Styles.items}>
              <Image src={item.image} width={60} height={60} alt="Icon" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
