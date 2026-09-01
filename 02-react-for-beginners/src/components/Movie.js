import PropTypes from "prop-types";
import { Link } from "react-router";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      {/* <h2>{<a href="/movie">{title}</a>} </h2> 이렇게 하면 새로고침이 되므로 새로고침없이 하려면 Link 컴포넌트를 이용한다 */}
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
