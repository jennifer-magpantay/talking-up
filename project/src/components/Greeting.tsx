import React, { useRef, useEffect } from "react";

interface GreetingProps {
  userName?: string;
}

export const Greeting = ({ userName }: GreetingProps) => {
  const greetingRef = useRef("");

  useEffect(() => {
    greetingRef.current = setGreeting();

    return () => {
      greetingRef.current = "";
    };
  }, []);

  function setGreeting() {
    let message = "";
    const currentTime = new Date().getHours();
    if (currentTime > 0 && currentTime < 12) {
      message = "Good morning";
    } else if (currentTime > 12 && currentTime < 18) {
      message = "Good afternoon";
    } else {
      message = "Good evening";
    }

    return message;
  }

  return (
    <h1 className="greeting">
      {greetingRef.current !== "" ? `${greetingRef.current}, ${userName}` : ""}
    </h1>
  );
};
