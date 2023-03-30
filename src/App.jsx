import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";

function App() {
  const handleWatchTime = (time) => {
    console.log(time);
  };
  return (
    <div className="App">
      <div className="main row m-4">
        <div className="home-container col-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-cart card col-4 mt-2">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
}

export default App;
