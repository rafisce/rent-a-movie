import Rating from "./Rating";
import { Link } from "react-router-dom";

const MoviesCard = (props) => {
  const { movie } = props;
  return (
    <div className="col col-12 col-md-4 col-lg-3" dir="ltr">
      <div className="card">
        <img className="img-fluid" src={movie.img} alt={movie.img} />

        <div className={"overlay center"}>
          <Rating rating={movie.rating} />
          <div className="movie-title">
            <h3>{movie.title}</h3>
          </div>
          <div className="movie-description">
            <p>{movie.description}</p>
          </div>
          <Link className="btn" to={`rent/${movie.id}`}>השכר</Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
