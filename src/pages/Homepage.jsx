import AnimationCard from "../components/AnimationCard";

const Homepage = () => {
  return (
    <>
      <div>
        <div className="mt-24">
          <span className="font-primary bg-inherit text-brandBackground font-normal text-2xl">
            Welcome to my interaction library!
          </span>
        </div>
        <div className="grid grid-cols-2 gap-12 pt-12">
          <AnimationCard name={"SVG Animation"} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
