import React, { useEffect } from "react";
import Left from "react-ionicons/lib/MdArrowDropleft";
import Right from "react-ionicons/lib/MdArrowDropright";
import Colors from "../../utils/colors";
import {
  Wrapper,
  Joke,
  Footer,
  JokeCount,
  Next,
  Previous
} from "./card.styled.js";

export default function Card(props) {
  useEffect(() => {
    const handleKeypress = function handleKeypress(event) {
      if (event.key === "ArrowLeft") {
        props.getPreviousJoke();
      } else if (event.key === "ArrowRight") {
        props.getNextJoke();
      }
    };

    document.body.addEventListener("keydown", handleKeypress);

    return function cleanup() {
      document.body.removeEventListener("keydown", handleKeypress);
    };
  });

  return (
    <Wrapper>
      <Joke>{props.children}</Joke>
      <Footer>
        <Previous color={Colors.purple} onClick={props.getPreviousJoke}>
          <Left color={Colors.white} />
        </Previous>
        <JokeCount>
          {props.currentJoke} of {props.jokeCount}
        </JokeCount>
        <Next color={Colors.purple} onClick={props.getNextJoke}>
          <Right color={Colors.white} />
        </Next>
      </Footer>
    </Wrapper>
  );
}
