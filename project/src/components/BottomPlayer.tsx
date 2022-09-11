import { ArrowsOutSimple } from "phosphor-react";
import { Button } from "./Button";

// types
import { FormatedDataType } from "../types/types";

interface Props {
  heigth: string;
  children: React.ReactNode;
  title: string;
  // data: FormatedDataType[];
  // index: number;
  onClick: () => void;
}

/* 
  BUG: Understand why data[index].prop stop working after while
*/

export const BottomPlayer = ({
  heigth,
  children,
  title,
  // data,
  // index,
  onClick,
}: Props) => {
  return (
    <div className={`bottom-player ${heigth}`}>
      <div className="bottom-player-info">
        <div className="bottom-player-artist">
          <a href="" className="player--link">
            <img
              className="thumb"
              src="https://via.placeholder.com/150"
              alt={title}
              title={title}
              loading="lazy"
            />
            <span className="vertical-bar">|</span>
            <p>{title}</p>
          </a>
        </div>
        {children}
      </div>
      <Button
        type="button"
        icon={<ArrowsOutSimple size={36} weight="thin" alt="Expand player" />}
        onClick={onClick}
      />
    </div>
  );
};
