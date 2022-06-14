import { PlayCircle } from "phosphor-react";

import { Button } from "./Button";

// types
import { FormatedDataType } from "../types/types";

interface Props {
  data: FormatedDataType[];
  onClick: (id: string) => void;
}

export const Table = ({ data, onClick }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Members</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Listen</th>
        </tr>
      </thead>
      <tbody>
        {/* map episodes list from json server */}
        {data.map(
          ({ id, thumbnail, title, members, publishedAt, duration }) => (
            <tr>
              <td className="td--flex">
                <img
                  className="thumb"
                  src={thumbnail}
                  alt={title}
                  title={title}
                />
                <span>|</span>
                {title}
              </td>
              <td>{members}</td>
              <td>{publishedAt}</td>
              <td>{duration}</td>
              <td>
                <Button
                  type="button"
                  icon={<PlayCircle size={40} />}
                  onClick={() => onClick(id)}
                />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
