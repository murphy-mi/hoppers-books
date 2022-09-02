import "../App.css"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselContainer from "./CarouselContainer"


const NytListTitle = styled.div`
    position: relative;
    text-align: center;
    font-size: 60px;
    font-weight: 20px;
    margin-top: 100px;
    margin-bottom: 0;
`;

const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1514823529749-16594073828c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 210px 0 210px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
`;

function HomePage({ user }) {
    const [fictionResults, setFictionResults] = useState([])
    const [nonFictionResults, setNonFictionResults] = useState([])
    const [youngAdultResults, setYoungAdultResults] = useState([])

    console.log(nonFictionResults)

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

    useEffect(() => {
        fetch('https://hoppers-books.herokuapp.com/best_sellers')
            .then(res => res.json())
            .then(data => {
                resultCategories(data)
            })

    }, [])

    function resultCategories(results) {
        let fiction = []
        let nonfiction = []
        let youngAdult = []

        results.forEach(result => {
            if (result.genre === "Hardcover Fiction") {
                fiction.push(result)
            } else if (result.genre === "Hardcover Nonfiction") {
                nonfiction.push(result)
            } else {
                youngAdult.push(result)
            }
        })
        setFictionResults(fiction)
        setNonFictionResults(nonfiction)
        setYoungAdultResults(youngAdult)
    }

    return (
        <div className="homepage-container">
            <BannerContainer >
                <h1 style={{ color: "white", fontSize: "80px", textAlign: "center", textShadow: "2px 2px black" }}>Welcome to Hopper's Books!</h1>
                <h2 style={{ color: "white", fontSize: "60px", textAlign: "center", textShadow: "2px 2px black" }}>FREE shipping on all orders</h2>
            </BannerContainer>
            <NytListTitle>Browse NYT Bestsellers - Fiction</NytListTitle>
            <CarouselContainer books={fictionResults} user={user} />
            <NytListTitle>Browse NYT Bestsellers - Nonfiction</NytListTitle>
            <CarouselContainer books={nonFictionResults} user={user} />
            <NytListTitle>Browse NYT Bestsellers - Young Adult</NytListTitle>
            <CarouselContainer books={youngAdultResults} user={user} />
        </div>
    );
}

export default HomePage;