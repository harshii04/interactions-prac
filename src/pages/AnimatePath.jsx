import { motion } from "motion/react";

const AnimatePath = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-24 gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-brandBackground text-3xl font-medium font-secondary w-1/2 ">
            An engineer turned product designer with a flair for research and
            problem-solving
          </p>
          <p className="font-primary text-lg font-light w-1/2 text-brandBackground text-opacity-70">
            I was working as a product design intern at Avalon Scenes & Dive , I
            have worked on productising client-requested features, internal
            tools, educational platform to teach coding and game design.
          </p>
        </div>
        <svg
          viewBox="0 0 295 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 mt-4"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.15,
              ease: "easeInOut",
            }}
            d="M1 1C1 1 11.2386 23 23.5385 23C35.8383 23 33.7771 1 46.0769 1C58.3768 0.999999 56.3155 23 68.6154 23C80.9152 23 78.854 1 91.1538 1C103.454 1 101.392 23 113.692 23C125.992 23 123.931 0.999996 136.231 1C148.531 1 146.469 23 158.769 23C171.069 23 169.008 1 181.308 1C193.608 1 191.546 23 203.846 23C216.146 23 214.085 1 226.385 1C238.684 0.999996 236.623 23 248.923 23C261.223 23 259.162 0.999996 271.462 1C283.761 1 294 23 294 23"
            stroke="#DFA962"
            strokeWidth={6}
          />
        </svg>
        <a
          className="font-secondary font-medium text-brandBackground"
          href="https://www.harshux.com/"
          target="_blank"
        >
          Check out my work
        </a>
        <svg
          viewBox="0 0 295 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.15,
              ease: "easeInOut",
            }}
            d="M1 1C1 1 11.2386 23 23.5385 23C35.8383 23 33.7771 1 46.0769 1C58.3768 0.999999 56.3155 23 68.6154 23C80.9152 23 78.854 1 91.1538 1C103.454 1 101.392 23 113.692 23C125.992 23 123.931 0.999996 136.231 1C148.531 1 146.469 23 158.769 23C171.069 23 169.008 1 181.308 1C193.608 1 191.546 23 203.846 23C216.146 23 214.085 1 226.385 1C238.684 0.999996 236.623 23 248.923 23C261.223 23 259.162 0.999996 271.462 1C283.761 1 294 23 294 23"
            stroke="#DFA962"
            strokeWidth={5}
          />
        </svg>
      </div>
    </>
  );
};

export default AnimatePath;
