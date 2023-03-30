import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState([]);
  // add break time state
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage);

    // get break time from local storage
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [watchTime]);

  // set break time to local storage
  const handleBreakTime = (bt) => {
    localStorage.setItem("break-time", bt);
    setBreakTime(bt);
  };

  // set react-toastify in complete button
  const handleComplete = () => {
    toast("Wow so easy!");
  };

  return (
    <div className="">
      <div>
        <h1>My Cart</h1>

        <div className="mt-5 text-center">
          <p>Total Watch Time</p>
          <input type="text" value={time} disabled />
        </div>
        <h5 className="mt-5">Add Break Time</h5>
        <button
          onClick={() => handleBreakTime(15)}
          className="w-25 btn-circle m-1 btn btn-info"
        >
          15
        </button>
        <button className="w-25 btn-circle bg-warning btn btn-info">20</button>
        <button className="w-25 btn-circle m-1 bg-danger btn btn-info">
          25
        </button>
        <input type="text" value={breakTime} disabled />
        <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
          Complete
        </button>
      </div>
    </div>
  );
};

export default SideCart;
