import "./App.css";
import AnimationCard from "./components/AnimationCard";

function App() {
  return (
    <>
      <div className="container">
        <div className="mt-24">
          <span className="font-primary bg-inherit text-brandBackground font-normal text-2xl">
            Welcome to my interaction library!
          </span>
        </div>
        <div className="grid grid-cols-2 gap-12 pt-12">
          <AnimationCard name={"SVG Animation"} />
          <AnimationCard name={"Coming soon!"} />
        </div>
      </div>
    </>
  );
}

export default App;
