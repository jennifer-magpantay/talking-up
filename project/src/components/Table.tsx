import { PlayCircle } from "phosphor-react";

import { Button } from "./Button";

// types
import { DataType } from "../types/types";

interface Props {
  data: DataType[];
}

export const Table = ({ data }: Props) => {
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
        {data.map(({ thumbnail, title, members, published_at, file }) => (
          <tr>
            <td className="td--flex">
              <img className="thumb" src={thumbnail} alt={title} />
              <span>|</span>
              {title}
            </td>
            <td>{members}</td>
            <td>{published_at}</td>
            <td>{file.duration}</td>
            <td>
              <Button
                type="button"
                icon={<PlayCircle size={40} />}
                onClick={() => console.log("clicked")}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
