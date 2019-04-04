import React, { useState, useContext, useEffect, useRef } from "react";
import { render } from "react-dom";
import UserContext from "../../contexts/UserContext";
import { useTrail, animated } from "react-spring";
import { TextWrapper, TextTrails } from "./welcome.styled";

const items = ["Hello", "Victor"];
const config = { mass: 5, tension: 2000, friction: 200, duration: 1500 };

const WelcomeText = ({ history }) => {
  const [toggle, set] = useState(true);
  const userContext = useContext(UserContext);
  const stateRef = useRef(toggle);
  stateRef.current = toggle;

  const completeAnimation = () => {
    setTimeout(() => {
      history.push("/chat");
    }, 1500);
  };

  useEffect(() => {
    items.push(userContext.name);
    completeAnimation();
  }, [false]);

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 25 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  const getCustomText = index => ({
    color: index === 1 ? "#50a1f1" : "inherit"
  });
  return (
    <TextWrapper onClick={() => set(state => !state)}>
      {trail.map(({ x, height, ...rest }, index) => (
        <TextTrails
          key={items[index]}
          style={{
            ...rest,
            ...getCustomText(index),
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          <TextTrails style={{ height }}>{items[index]}</TextTrails>
        </TextTrails>
      ))}
    </TextWrapper>
  );
};
export default WelcomeText;
