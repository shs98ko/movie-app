import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams(); //{id(router에 있는 id): url에 있는 id값}
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`,
      )
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} />
      <h1>{movie.title}</h1>
      <h3>{movie.description_full}</h3>
    </div>
  );
}
export default Detail;
