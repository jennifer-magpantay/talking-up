export type DataType = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: "audio/x-m4a";
    duration: number;
  };
};

export type FormatedDataType = {
  id: string;
  title: string;
  description: string;
  members: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
};
