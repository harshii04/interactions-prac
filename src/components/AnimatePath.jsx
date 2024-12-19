import { motion } from "motion/react";

const AnimatePath = () => {
  return (
    <>
      <div className="h-screen" />
      <div className="flex items-center justify-center h-svh bg-emerald-950">
        <span className="relative text-[#FFF6E5] text-2xl font-light italic underline">
          Harsh
          <svg
            width="363"
            height="163"
            viewBox="0 0 363 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-36 -translate-y-24"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.15,
                ease: "easeInOut",
              }}
              d="M0.5 30.5C0.5 30.5 104.5 -1.36804 193.5 23.132C232.695 33.9215 270.976 48.592 274 89.132C277.503 136.1 225.05 164.258 178 162.132C133.544 160.123 101.22 148.868 93 105.132C80.5638 38.9633 161.254 32.6062 227.5 11.6319C291.163 -8.5244 362 5.5 362 5.5"
              stroke="#FDC657"
              strokeWidth="3"
            />
          </svg>
        </span>
      </div>
      <div className="h-screen" />
    </>
  );
};

export default AnimatePath;
