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
        src: "https://trendingpics.com/app/images/download.php?key=y8pI7wIA",
        alt: "Image 1",
    },
    {
        id: 2,
        src: "https://trendingpics.com/app/images/download.php?key=y8pImwwA",
        alt: "Image 2 ",
    },
    {
        id: 3,
        src: "https://trendingpics.com/app/images/download.php?key=y0xL7gEA",
        alt: "Image 2 ",
    },
    {
        id: 4,
        src: "https://trendingpics.com/app/images/download.php?key=y0xL7gYA",
        alt: "Image 3",
    },
    {
        id: 5,
        src: "https://trendingpics.com/app/images/download.php?key=y8pI7wIA",
        alt: "Image 1",
    },
    {
        id: 6,
        src: "https://trendingpics.com/app/images/download.php?key=y8pImwwA",
        alt: "Image 2 ",
    },
    {
        id: 7,
        src: "https://trendingpics.com/app/images/download.php?key=y0xL7gEA",
        alt: "Image 2 ",
    },
    {
        id: 8,
        src: "https://trendingpics.com/app/images/download.php?key=y0xL7gYA",
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
