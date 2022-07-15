// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import CarouselItem from "./CarouselItem.js"
import styled from "styled-components";

const SliderContainer = styled.div`
    width: 70%;
    height: 700px;
    margin: 2% 15% 10% 15%;
    background:  linear-gradient(rgba(162, 208, 162, 0.333), rgba(20, 63, 20, 0.333));
    border-radius: 15px;  
`;

function CarouselContainer({ books, user }) {
    const [bookIndex, setBookIndex] = useState(0)

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
        dots: true,
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

    return (
        <SliderContainer>
            <Slider {...settings}>
                {books.length ? books.map((result, index) => {
                    return (
                        <CarouselItem result={result} index={index} bookIndex={bookIndex} user={user} />
                    )
                }) : null}
            </Slider>
        </SliderContainer>
    );
}

export default CarouselContainer;