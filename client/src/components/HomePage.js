import "../App.css"
// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import styled from "styled-components";

const SliderContainer = styled.div`
    width: 70%;
    margin: 5% 15% 10% 15%;
    background-color: rgba(162, 208, 162, 0.333);
    border-radius: 15px;
    
`;

const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80");
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 400px 0 400px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
`;

function HomePage() {
    // const [nytResults, setNytResults] = useState([])
    const [googleResults, setGoogleResults] = useState([])
    const [bookIndex1, setBookIndex1] = useState(0)
    const [bookIndex2, setBookIndex2] = useState(0)
    const [bookIndex3, setBookIndex3] = useState(0)

    console.log('Google Results:', googleResults)

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick} style={{ backgroundColor: "rgba(162, 208, 162, 0.125)" }}>
                <div>
                    <h1>{">"}</h1>
                </div>
            </div>
        )
    }
    const PreviousArrow = ({ onClick }) => {
        return (
            <div className="arrow previous" onClick={onClick}>
                <h1>{"<"}</h1>
            </div>
        )
    }

    const settings1 = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (current, next) => setBookIndex1(next)
    };
    const settings2 = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (current, next) => setBookIndex2(next)
    };
    const settings3 = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        beforeChange: (current, next) => setBookIndex3(next)
    };

    useEffect(() => {
        // Will be doing above fetches in backend (just once?)
        // Do I need a new model for books that are nyt books?
        // Would then separate into sections by their genres (ex: genre: "hardcover-fiction")
        // With that, we would be able to add to cart much easier
        fetch('http://localhost:3000/best_sellers')
            .then(res => res.json())
            .then(data => setGoogleResults(data))
    }, [])

    return (
        <>
            <BannerContainer >
                <h1 style={{ color: "white", fontSize: "80px", textAlign: "center", textShadow: "2px 2px black" }}>Welcome to Hopper's Books!</h1>
                <h2 style={{ color: "white", fontSize: "60px", textAlign: "center", textShadow: "2px 2px black" }}>FREE shipping on all orders</h2>
            </BannerContainer>
            <h2>Browse NYT Bestsellers - Fiction</h2>
            <SliderContainer>
                <Slider {...settings1}>
                    {/* REACT-SLICK CAROUSEL WORKS!!! JUST BREAKING WITH THE DATA WE'RE PULLING */}
                    {googleResults.length ? googleResults.map((result, index) => {
                        return (
                            <div className={index === bookIndex1 ? "slide activeSlide" : "slide"}>
                                <img src={result.image} style={{ boxShadow: "0 10px 6px -6px black" }} />
                                <h3>{result.title}</h3>
                                <h4>{result.author}</h4>
                                {/* <img style={{ width: "50px", height: "80px" }} src={result.items[0].volumeInfo.imageLinks.smallThumbnail} alt={result.items[0].volumeInfo.title} /> */}
                            </div>
                        )
                    }) : null}
                </Slider>
            </SliderContainer>
            <SliderContainer>
                <h2>Browse NYT Bestsellers - Nonfiction</h2>
                <Slider {...settings2}>
                    {/* REACT-SLICK CAROUSEL WORKS!!! JUST BREAKING WITH THE DATA WE'RE PULLING */}
                    {googleResults.length ? googleResults.map((result, index) => {
                        return (
                            <div className={index === bookIndex2 ? "slide activeSlide" : "slide"}>
                                <img src={result.image} style={{ boxShadow: "0 10px 6px -6px black" }} />
                                <h3>{result.title}</h3>
                                <h4>{result.author}</h4>
                                {/* <img style={{ width: "50px", height: "80px" }} src={result.items[0].volumeInfo.imageLinks.smallThumbnail} alt={result.items[0].volumeInfo.title} /> */}
                            </div>
                        )
                    }) : null}
                </Slider>
            </SliderContainer>
            <SliderContainer>
                <h2>Browse NYT Bestsellers - Young Adult</h2>
                <Slider {...settings3}>
                    {/* REACT-SLICK CAROUSEL WORKS!!! JUST BREAKING WITH THE DATA WE'RE PULLING */}
                    {googleResults.length ? googleResults.map((result, index) => {
                        return (
                            <div className={index === bookIndex3 ? "slide activeSlide" : "slide"}>
                                <img src={result.image} style={{ boxShadow: "0 10px 6px -6px black" }} />
                                <h3>{result.title}</h3>
                                <h4>{result.author}</h4>
                                {/* <img style={{ width: "50px", height: "80px" }} src={result.items[0].volumeInfo.imageLinks.smallThumbnail} alt={result.items[0].volumeInfo.title} /> */}
                            </div>
                        )
                    }) : null}
                </Slider>
            </SliderContainer>

        </>
    );
}

export default HomePage;