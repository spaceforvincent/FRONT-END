import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  //props : 이 내용들을 부모로부터 받아올 예정
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key="genre">{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
