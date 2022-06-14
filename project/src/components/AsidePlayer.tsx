import { XCircle } from "phosphor-react";
import { Button } from "./Button";

interface Props {
  width: string;
  children: React.ReactNode;
  onClickCloseBtn: () => void;
}

export const AsidePlayer = ({ width, children, onClickCloseBtn }: Props) => {
  return (
    <aside className={`aside-player ${width}`}>
      <div className="aside--header">
        <h3 className="aside--title">Listening now</h3>
        <Button
          style="aside--header-btn"
          type="button"
          icon={<XCircle size={32} alt="Closing button" />}
          onClick={onClickCloseBtn}
        />
      </div>

      <div className="aside--body">
        <figure className="aside--body-img-container">
          <img
            className="aside--body-img"
            src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Artist Album"
            loading="lazy"
          />
          <figcaption>Album's name | Artist's name</figcaption>
        </figure>
      </div>
      {children}
    </aside>
  );
};
