import React from "react";
import { Greeting } from "./Greeting";

interface HeroProps {
  hasGreeting: boolean;
  title: string;
  userName?: string;
  children: React.ReactNode;
}

export const Hero = ({ hasGreeting, title, userName, children }: HeroProps) => {
  return (
    <section className="section">
      {hasGreeting && <Greeting userName={hasGreeting && userName} />}
      <h2 className="section--title">{title}</h2>
      {children}
    </section>
  );
};
