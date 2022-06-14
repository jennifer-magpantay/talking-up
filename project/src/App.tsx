import { useEffect, useState } from "react";

import axios from "axios";

import "./styles/app.css";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AsidePlayer } from "./components/AsidePlayer";
import { BottomPlayer } from "./components/BottomPlayer";
import { PlayerControl } from "./components/PlayerControl";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { Table } from "./components/Table";
import { Carrousel } from "./components/Carrousel";

// types
import { DataType } from "./types/types";

const baseURL = " http://localhost:3333/episodes";

export function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container-flex">
        <Main width={isPlayerExpanded ? "w-3/4" : "w-full"}>
          <Section title="Releases">
            <Carrousel />
          </Section>

          <Section title="All episodes">
            <Table data={data} />
          </Section>

          <BottomPlayer
            heigth={isPlayerExpanded ? "h-0 -bottom-8" : "h-20 bottom-0"}
            onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
          >
            <PlayerControl
              isPlaying={isPlaying}
              onClickPlayBtn={() => setIsPlaying(!isPlaying)}
              onClickPreviousBtn={() => console.log("previous podcast")}
              onClickNextBtn={() => console.log("next podcast")}
            />
          </BottomPlayer>
        </Main>

        {isPlayerExpanded && (
          <AsidePlayer
            width={isPlayerExpanded ? "w-1/4" : "w-0"}
            onClickCloseBtn={() => setIsPlayerExpanded(!isPlayerExpanded)}
          >
            <PlayerControl
              isPlaying={isPlaying}
              onClickPlayBtn={() => setIsPlaying(!isPlaying)}
              onClickPreviousBtn={() => console.log("previous podcast")}
              onClickNextBtn={() => console.log("next podcast")}
            />
          </AsidePlayer>
        )}
      </div>
      <Footer />
    </>
  );
}
