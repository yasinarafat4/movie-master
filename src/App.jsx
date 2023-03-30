import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="main row">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="side-cart col-md-4">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
}

export default App;
