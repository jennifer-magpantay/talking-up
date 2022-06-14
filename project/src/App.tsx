import { useEffect, useState } from "react";

import "./styles/app.css";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Section } from "./components/Section";
import { Table } from "./components/Table";
import { Carrousel } from "./components/Carrousel";
import { AsidePlayer } from "./components/AsidePlayer";
import { BottomPlayer } from "./components/BottomPlayer";
import { PlayerControl } from "./components/PlayerControl";
import { Footer } from "./components/Footer";

// types
import { FormatedDataType } from "./types/types";

// helpers
import { formatData } from "./helpers/formatData";

// services
import { api } from "./services/api";

export function App() {
  const [data, setData] = useState<FormatedDataType[]>([]);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/episodes");
      const dataFormated = formatData(response.data);
      setData(dataFormated);
    }
    getData();
  }, []);

  function handlePlayEpisode(id: string) {
    console.log(id);
  }

  return (
    <>
      <Header />
      <div className="container-flex">
        <Main width={isPlayerExpanded ? "w-3/4" : "w-full"}>
          <Section title="Releases">
            <Carrousel />
          </Section>

          <Section title="All episodes">
            <Table data={data} onClick={(id) => handlePlayEpisode(id)} />
          </Section>

          <BottomPlayer
            data={data}
            // index='0'
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
