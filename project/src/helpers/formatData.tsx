// types
import { DataType } from "../types/types";

// helpers
import { formatDate } from "./formatDate";
import { convertTime } from "./convertTime";

export const formatData = (data: DataType[]) => {
  const dataFormated = data.map((episode: DataType) => {
    const { id, title, description, members, thumbnail, published_at, file } =
      episode;
    return {
      id,
      title: title.slice(13),
      description,
      members,
      thumbnail,
      publishedAt: formatDate(published_at),
      duration: convertTime(file.duration),
    };
  });

  return dataFormated;
};
