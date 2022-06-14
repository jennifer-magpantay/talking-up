import {
  PlayCircle,
  PauseCircle,
  SkipBackCircle,
  SkipForwardCircle,
} from "phosphor-react";

import { Button } from "./Button";

interface Props {
  isPlaying: boolean;
  onClickPreviousBtn: () => void;
  onClickPlayBtn: () => void;
  onClickNextBtn: () => void;
}

export const PlayerControl = ({
  isPlaying,
  onClickPlayBtn,
  onClickPreviousBtn,
  onClickNextBtn,
}: Props) => {
  return (
    <div className="player-control--container">
      <Button
        type="button"
        icon={<SkipBackCircle size={40} />}
        onClick={onClickPreviousBtn}
      />

      <Button
        type="button"
        icon={isPlaying ? <PlayCircle size={48} /> : <PauseCircle size={48} />}
        onClick={onClickPlayBtn}
      />

      <Button
        type="button"
        icon={<SkipForwardCircle size={40} />}
        onClick={onClickNextBtn}
      />
    </div>
  );
};
