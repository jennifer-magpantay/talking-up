import { ArrowsOutSimple } from "phosphor-react";
import { Button } from "./Button";

interface Props {
  heigth: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const BottomPlayer = ({ heigth, children, onClick }: Props) => {
  return (
    <div className={`bottom-player ${heigth}`}>
      <div className="bottom-player-info">
        <div className="bottom-player-artist">
          <img
            className="thumb"
            src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
            alt="Music Album"
          />
          <span>|</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {children}
      </div>
      <Button
        type="button"
        icon={<ArrowsOutSimple size={36} alt="Expand player" />}
        onClick={onClick}
      />
    </div>
  );
};
