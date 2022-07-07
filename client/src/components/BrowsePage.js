import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import styled from "styled-components";


const CategoryTitle = styled.div`
    justify-content: start;
    margin-left: 20rem;
`;

const Cont = styled.div`
  justify-content: center;
  margin-left: 20rem;
  margin-right: 20rem;
  @media (min-width: 1555px) and (max-width: 1715px) {
    margin-left: 15rem;
    margin-right: 15rem;
  }
  @media (min-width: 1395px) and (max-width: 1555px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
  @media (min-width: 805px) and (max-width: 1395px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media (min-width: 645px) and (max-width: 805px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 645px) {
    margin: 0;
  }
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
`;

function BrowsePage(user) {
  const [results, setResults] = useState({ items: [] })
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()
  console.log(user)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.name}+subject&printType=books&maxResults=40&key=AIzaSyD2iMrcxWXeVK4l3X93uzwsEtrvDaUzLXE`)
      .then(res => res.json())
      .then(setResults)
    setIsLoading(false)
  }, [params])

  const renderResults = results.items.map((result, index) => (
    <ResultCard key={index} result={result} index={index} user={user} />
  ));

  return (
    <>
      <CategoryTitle>
        <h1>
          {isLoading ? "Loading..." : `${params.name.toUpperCase()}`}
        </h1>
      </CategoryTitle>
      <Cont>
        <ResultContainer>{renderResults}</ResultContainer>
      </Cont>
    </>
  );
}

export default BrowsePage;