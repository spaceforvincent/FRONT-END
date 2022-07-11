import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  //props : 이 내용들을 부모로부터 받아올 예정
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>{title}</h2>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
