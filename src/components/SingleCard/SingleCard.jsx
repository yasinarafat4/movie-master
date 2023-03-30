import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  // const {movie} = props;

  return (
    <div className="m-2">
      <div className="movie-card card text-center m-auto p-4 w-75">
        <div className="movie-poster">
          <img className="w-50 h-50" src={movie.poster} alt="" />
        </div>
        <h3>{movie.movieName}</h3>
        <p>{movie.description}</p>

        <div className="time-and-ratings d-flex justify-content-around">
          <p>Watch Time: {movie.watchTime}</p>
          <p>Rating: {movie.imdbRating} </p>
        </div>
        <button
          onClick={() => handleWatchTime(movie.watchTime)}
          className="btn btn-info w-50 m-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
