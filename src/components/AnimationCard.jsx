import { ArrowUpRight } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import * as motion from "motion/react-client";
import { Link } from "react-router";

const AnimationCard = ({ name }) => {
  return (
    <>
      <Link to="interaction1">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            ease: "easeIn",
          }}
          className="flex gap-2 justify-between px-4 py-4 border-brandBackground border border-opacity-20 hover:border-opacity-40 bg-brandBackground bg-opacity-10 hover:bg-opacity-20 hover:cursor-pointer transition-all duration-300 ease-in-out rounded-lg"
        >
          <h1 className="font-primary">{name}</h1>
          <ArrowUpRight size={24} color="#20323b" />
        </motion.div>
      </Link>
    </>
  );
};

AnimationCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AnimationCard;
