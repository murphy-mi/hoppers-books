import "../App.css"
import React, { useEffect, useState } from "react";
import Slider from "react-slick"

function HomePage() {
    const [nytResults, setNytResults] = useState([])
    const [nytGoogleResults, setNytGoogleResults] = useState([])
    console.log(nytGoogleResults)

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    // other nytimes api options:
    // HARDCOVER NONFICTION
    // "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-nonfiction&api-key=y4rzw6iH1pkbmcbezTXYUYhntpmQKHSR"
    // "https://api.nytimes.com/svc/books/v3/lists.json?list-name=young-adult-hardcover&api-key=y4rzw6iH1pkbmcbezTXYUYhntpmQKHSR"



    // NEED TO TAKE ARRAY THAT WE GET FROM NYTIMES....
    // THEN FOR EACH ITEM IN THE ARRAY, GRAB THE BOOK FROM GOOGLE BOOKS API BASED ON ISBNS
    // FOR EACH GOOGLE BOOKS API BOOK, GENERATE A DIV INSIDE <Slider></Slider> WITH IMAGE, BOOK TITLE, AND AUTHOR (maybe also the best-seller ranking)

    // useEffect(() => {
    //     fetch("https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=y4rzw6iH1pkbmcbezTXYUYhntpmQKHSR")
    //         .then(res => res.json())
    //         .then((data) => {
    //             data.results.forEach(result => {
    //                 fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${result.isbns[0].isbn10}&key=AIzaSyD2iMrcxWXeVK4l3X93uzwsEtrvDaUzLXE`)
    //                     .then(res => res.json())
    //                     .then((data) => resultsArr.push(data))
    //             })
    //             setNytGoogleResults(() => [...nytGoogleResults, data])
    //         })
    // }, [])

    return (
        <div>
            <h2>NYT Bestsellers</h2>
            <Slider {...settings}>
                {/* REACT-SLICK CAROUSEL WORKS!!! JUST BREAKING WITH THE DATA WE'RE PULLING */}
                {nytGoogleResults.map(result => {
                    return (
                        <div>
                            <h3>Hello</h3>
                            <p>Description</p>
                            {/* <img style={{ width: "50px", height: "80px" }} src={result.items[0].volumeInfo.imageLinks.smallThumbnail} alt={result.items[0].volumeInfo.title} /> */}
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default HomePage;