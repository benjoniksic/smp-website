import React from "react";
import Slider from "react-slick";
import "./styles.css";
import SectionHeader from "../components/sections/partials/SectionHeader";

const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
};

const images = [
    {
        id: 1,
        src: require("./../assets/images/prije-i-poslije/prije1.jpg"),
        alt: "Image 1",
    },
    {
        id: 2,
        src: require("./../assets/images/prije-i-poslije/poslije1.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 3,
        src: require("./../assets/images/prije-i-poslije/prije2.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 4,
        src: require("./../assets/images/prije-i-poslije/poslije2.jpg"),
        alt: "Image 3",
    },
    {
        id: 5,
        src: require("./../assets/images/prije-i-poslije/prije3.jpg"),
        alt: "Image 1",
    },
    {
        id: 6,
        src: require("./../assets/images/prije-i-poslije/poslije3.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 7,
        src: require("./../assets/images/prije-i-poslije/prije4.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 8,
        src: require("./../assets/images/prije-i-poslije/poslije4.jpg"),
        alt: "Image 3",
    },
    {
        id: 9,
        src: require("./../assets/images/prije-i-poslije/prije5.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 10,
        src: require("./../assets/images/prije-i-poslije/poslije5.jpg"),
        alt: "Image 3",
    },
    {
        id: 11,
        src: require("./../assets/images/prije-i-poslije/prije6.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 12,
        src: require("./../assets/images/prije-i-poslije/poslije6.jpg"),
        alt: "Image 3",
    },
    {
        id: 13,
        src: require("./../assets/images/prije-i-poslije/prije7.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 14,
        src: require("./../assets/images/prije-i-poslije/poslije7.jpg"),
        alt: "Image 3",
    },
    {
        id: 15,
        src: require("./../assets/images/prije-i-poslije/prije8.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 16,
        src: require("./../assets/images/prije-i-poslije/poslije8.jpg"),
        alt: "Image 3",
    },
    {
        id: 17,
        src: require("./../assets/images/prije-i-poslije/prije9.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 18,
        src: require("./../assets/images/prije-i-poslije/poslije9.jpg"),
        alt: "Image 3",
    },
    {
        id: 19,
        src: require("./../assets/images/prije-i-poslije/prije10.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 20,
        src: require("./../assets/images/prije-i-poslije/poslije10.jpg"),
        alt: "Image 3",
    },
    {
        id: 21,
        src: require("./../assets/images/prije-i-poslije/prije11.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 22,
        src: require("./../assets/images/prije-i-poslije/poslije11.jpg"),
        alt: "Image 3",
    },
    {
        id: 23,
        src: require("./../assets/images/prije-i-poslije/prije12.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 24,
        src: require("./../assets/images/prije-i-poslije/poslije12.jpg"),
        alt: "Image 3",
    },
    {
        id: 25,
        src: require("./../assets/images/prije-i-poslije/prije13.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 26,
        src: require("./../assets/images/prije-i-poslije/poslije13.jpg"),
        alt: "Image 3",
    },
    {
        id: 27,
        src: require("./../assets/images/prije-i-poslije/prije14.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 28,
        src: require("./../assets/images/prije-i-poslije/poslije14.jpg"),
        alt: "Image 3",
    },
    {
        id: 29,
        src: require("./../assets/images/prije-i-poslije/prije15.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 30,
        src: require("./../assets/images/prije-i-poslije/poslije15.jpg"),
        alt: "Image 3",
    },
    {
        id: 31,
        src: require("./../assets/images/prije-i-poslije/prije16.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 32,
        src: require("./../assets/images/prije-i-poslije/poslije16.jpg"),
        alt: "Image 3",
    },
    {
        id: 33,
        src: require("./../assets/images/prije-i-poslije/prije17.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 34,
        src: require("./../assets/images/prije-i-poslije/poslije17.jpg"),
        alt: "Image 3",
    },
    {
        id: 35,
        src: require("./../assets/images/prije-i-poslije/prije18.jpg"),
        alt: "Image 2 ",
    },
    {
        id: 36,
        src: require("./../assets/images/prije-i-poslije/poslije18.jpg"),
        alt: "Image 3",
    },
];

const PrijePoslije = () => {
    return (
        <div className="container section">
            <div className="section-inner">
                <SectionHeader
                    data={{
                        title: "Katalog prije i poslije",
                        paragraph:
                            "Ovdje mozete pregledati galeriju slika u kojem poredimo stanje prije i poslije tretmana. Ukoliko želite da vidite više naših radova na klijentima, slike možete pronaći na našim društvenim mrežama.",
                    }}
                    className="center-content"
                />
                <div className="imgslider">
                    <Slider {...settings}>
                        {images.map((item) => (
                            <div key={item.id}>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PrijePoslije;
