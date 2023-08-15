import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch( 'https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2004512546msh2fa707abdc862d0p12d1c0jsn9b024bb97c8e',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
})
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {movies.map(data => (
        <li key={data.id}>{data.title}</li>
      ))}
    </div>
  );
};

export default MovieList;
