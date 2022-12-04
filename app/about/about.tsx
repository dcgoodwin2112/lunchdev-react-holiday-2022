"use client";
import { useEffect, useReducer } from "react";
import styles from "./about.module.css";

const INIT = {
  title: "",
  firstThing: "",
  childhoodThing: "",
  hobbies: {
    one: "",
    two: "",
    three: "",
  },
  mainThing: "",
};

type Content = typeof INIT;

const titles = [
  "The Destroyer of Worlds",
  "Maker of Sandwiches",
  "Grower of Beards",
  "Consumer of Leftovers",
  "Wearer of Mis-matched Socks",
];
const firstThings = [
  "a swell chap",
  "a bit of an Arsehat",
  "not all that great with people",
  "someone we don't really care to talk about",
  "a figment of our collective imaginations",
  "not the droid you are looking for",
];
const childhoodThings = [
  "not really been all that skilled at well... anything",
  "had lofty goals such as world conquest and teaching ducks how to recognize road signs",
  "believed that he was actually a jellyfish in a past life",
  "always wanted to be the batman",
  "gotten a sick and twisted sense of enjoyment from putting fish in the microwave",
];
const hobbies = [
  "staring at the walls",
  "pondering existence",
  "yelling at clouds",
  "baking cookies",
  "talking smack",
  "sobbing quietly in the fetal position",
];
const mainThings = [
  "slappin' da bass",
  "shipping poorly written code and testing it in prod",
  "being the very best, the best there ever was. To catch them is his real test. To train them is his cause",
  "breaking all the rules and coloring outside the lines",
];

export default function About() {
  const contentDispatch = (state: Content, action: { type: "update" }) => {
    const getRandomValue = (values: string[]) => {
      return values[Math.floor(Math.random() * values.length)];
    };

    const getRandomValues = (values: string[], num = 3) => {
      const length = values.length;
      if (length < num) throw new Error("Input array length is less than num");
      values.sort(() => (Math.random() > Math.random() ? 1 : -1));
      return values.slice(0, num);
    };

    if (action.type === "update") {
      const [one, two, three] = getRandomValues(hobbies);
      return {
        title: getRandomValue(titles),
        firstThing: getRandomValue(firstThings),
        childhoodThing: getRandomValue(childhoodThings),
        hobbies: {
          one,
          two,
          three,
        },
        mainThing: getRandomValue(mainThings),
      };
    }
    return state;
  };

  const [content, dispatch] = useReducer(contentDispatch, INIT);

  useEffect(() => {
    if (content.title === "") dispatch({ type: "update" });
  }, [content, dispatch]);

  if (content.title === "") {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>About Dan, {content.title}</h1>
      <p className={styles.bio}>
        Dan is {content.firstThing}. Since he was a child, Dan has{" "}
        {content.childhoodThing}. His hobbies include{" "}
        {`${content.hobbies.one}, ${content.hobbies.two}, and ${content.hobbies.three}`}
        . His main pursuit in life is {content.mainThing}.
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "update" })}
      >
        Generate New Bio
      </button>
    </>
  );
}
