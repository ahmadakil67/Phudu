import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <motion.div
        className="w-4 h-8 bg-purple-500 rounded-full mx-2"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 2, 1],
          transition: {
            repeat: Infinity,
            duration: 0.6,
            times: [0, 0.5, 1],
          },
        }}
      />
      <motion.div
        className="w-4 h-8 bg-purple-500 rounded-full mx-2"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 2, 1],
          transition: {
            repeat: Infinity,
            duration: 0.6,
            delay: 0.2,
            times: [0, 0.5, 1],
          },
        }}
      />
      <motion.div
        className="w-4 h-8 bg-purple-500 rounded-full mx-2"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 2, 1],
          transition: {
            repeat: Infinity,
            duration: 0.6,
            delay: 0.4,
            times: [0, 0.5, 1],
          },
        }}
      />
    </div>
  );
};

export default Spinner;
