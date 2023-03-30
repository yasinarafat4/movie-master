import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // for showing watch time in UI
  const [watchTime, setWatchTime] = useState("");

  // setting watch time in local storage by button click
  const handleWatchTime = (time) => {
    // checking
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sumOfTime = previousWatchTime + time;
      localStorage.setItem("watchTime", sumOfTime);
      setWatchTime(sumOfTime);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  return (
    <div className="App">
      <div className="main row m-4">
        <div className="home-container col-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-cart card col-4 mt-2">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
