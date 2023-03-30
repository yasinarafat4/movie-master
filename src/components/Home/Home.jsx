import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="movie-container">
        <div className="movie-card card text-center w-100 m-auto">
          <div className="movie-poster">
            <img src="" alt="" />
          </div>
          <h3>Name:</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            et.
          </p>

          <div className="time-and-ratings d-flex justify-content-around">
            <p>Watch Time</p>
            <p>Ratings</p>
          </div>
          <button className="btn btn-info w-50 m-auto">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
