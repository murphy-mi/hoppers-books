// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import CarouselItem from "./CarouselItem.js"
import styled from "styled-components";

const SliderContainer = styled.div`
    width: 70%;
    height: 700px;
    margin: 5% 15% 10% 15%;
    background:  linear-gradient(rgba(162, 208, 162, 0.333), rgba(20, 63, 20, 0.333));
    border-radius: 15px;  
`;

function CarouselContainer({ googleResults }) {
    // Get googleResults specific to list type
    const [inCart, setInCart] = useState(false)
    const [inWishlist, setInWishlist] = useState(false)
    const [bookIndex, setBookIndex] = useState(0)

    console.log('Google Results:', googleResults)

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick} style={{ backgroundColor: "rgba(162, 208, 162, 0.02)" }}>
                <div>
                    <h1 style={{ fontSize: "150px" }}>{">"}</h1>
                </div>
            </div>
        )
    }
    const PreviousArrow = ({ onClick }) => {
        return (
            <div className="arrow previous" onClick={onClick} style={{ backgroundColor: "rgba(162, 208, 162, 0.02)" }}>
                <h1 style={{ fontSize: "150px" }}>{"<"}</h1>
            </div>
        )
    }

    const settings = {
        // dots: true,
        infinite: true,
        lazyLoad: true,
        adaptiveHeight: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (current, next) => setBookIndex(next)
    };

    function onCartClick() {
        setInCart(!inCart)
    }

    function onWishlistClick() {
        setInWishlist(!inWishlist)
    }
    // FETCH BEST SELLERS WITH SPECIFIC LIST TYPE
    // useEffect(() => {
    //     fetch('http://localhost:3000/best_sellers')
    //         .then(res => res.json())
    //         .then(data => setGoogleResults(data))
    //     // Filter through, returning only the bestsellers with a certain list type... passed down?
    // }, [])

    return (
        <SliderContainer>
            <Slider {...settings}>
                {googleResults.length ? googleResults.map((result, index) => {
                    return (
                        <CarouselItem result={result} index={index} bookIndex={bookIndex} />
                    )
                }) : null}
            </Slider>
        </SliderContainer>
    );
}

export default CarouselContainer;