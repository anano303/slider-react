import "./App.css";
import Slider1 from "./Components/Slider1";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Slider1 />
      <div>
        <Carousel headerText="საბავშვო ბაღი" />
        <Carousel headerText="სკოლა" backgroundColor="chartreuse" />
        <Carousel headerText="დაბადების დღის ცენტრი" backgroundColor="orange" />
        <Carousel headerText="გართობა" backgroundColor="rgb(189, 35, 61)" />
        <Carousel headerText="სპორტი" backgroundColor="rgb(51, 51, 245)" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
