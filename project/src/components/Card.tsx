import { PlayCircle } from "phosphor-react";

import { setTextEllipsis } from "../helpers/setTextEllipsis";
import { Button } from "./Button";

interface Props {
  thumbnail: string;
  title: string;
  members: string;
  published_at: string;
  duration: number;
  onClick: () => void;
}

export const Card = ({
  thumbnail,
  title,
  members,
  published_at,
  duration,
  onClick,
}: Props) => {
  return (
    <div className="card">
      <div className="card--header group">
        <a href="http://" className="card--header-link">
          <span>Read more</span>
          <img
            className="card--header-img"
            src={thumbnail}
            loading="lazy"
            alt={`Members chating about the topic: ${title}`}
            title={title}
          />
        </a>
      </div>
      <div className="card--body">
        <h3>{setTextEllipsis(title, 60)}</h3>
        <p>{members}</p>
        <div className="card--footer">
          <p>{published_at}</p>
          <span>|</span>
          <p>{duration}</p>
        </div>
      </div>
      <div className="card--player">
        <Button
          type="button"
          title={`Play episode:${title}`}
          icon={<PlayCircle size={48} weight="thin" />}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
