import React, { useState } from "react";
import { animated, config, useTransition } from "react-spring";

const WordsFading = () => {
  const [toggle, set] = useState(false);
  // Transition Style
  const transitions = useTransition(toggle, {
    from: {
      position: "absolute",
      opacity: 0,
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 50,
    duration: 100,
    config: config.molasses,
    onRest: () => set(!toggle),
  });

  return transitions(
    // Transition Contents
    ({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}
        >
          সর্ব বৃহৎ
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}
        >
          সর্ব প্রথম
        </animated.div>
      )
  );
};

export default WordsFading;
