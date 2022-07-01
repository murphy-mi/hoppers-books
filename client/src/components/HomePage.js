import { useEffect } from "react";

function HomePage() {

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=education+subject&maxResults=3")
            .then(res => res.json())
            .then(console.log)
    }, [])

    return (
        <h3>HomePage goes here</h3>
    );
}

export default HomePage;