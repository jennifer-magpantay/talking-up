import { useEffect, useState } from "react";

import "./styles/app.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { Main } from "./components/Main";
import { Section } from "./components/Section";
import { Table } from "./components/Table";
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

  const [indexPlayer, setIndexPlayer] = useState(0);

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
    teste(id, data);
  }

  // Get the index of an obj by using its id as param
  function teste(id: string, data: FormatedDataType[]) {
    // use findeIndex() to get the id of an array of objects that would match the param
    const index = data.findIndex((item) => item.id === id);
    // then, you can use this as base for statements
    // id === data[index].id ? doSomething() : doOtherThing();

    console.log(index);
    setIndexPlayer(index);
  }

  return (
    <>
      <Header />
      <div className="container-flex">
        <Main width={isPlayerExpanded ? "w-3/4" : "w-full"}>
          <Hero hasGreeting={true} userName="stranger" title="Releases">
            <Slider length={5} data={data} />
          </Hero>

          <Section title="All episodes">
            <Table data={data} onClick={(id) => handlePlayEpisode(id)} />
          </Section>

          <BottomPlayer
            // data={data}
            // index={indexPlayer}
            heigth={isPlayerExpanded ? "h-0 -bottom-8" : "h-20 bottom-0"}
            title="Some title here"
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
            title="Some Title here"
            members="Uncle Bob"
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
