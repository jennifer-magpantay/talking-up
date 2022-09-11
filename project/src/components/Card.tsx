interface Props {
  thumbnail: string;
  title: string;
  members: string;
  published_at: string;
  duration: number;
}

export const Card = ({
  thumbnail,
  title,
  members,
  published_at,
  duration,
}: Props) => {
  return (
    <div className="card">
      <div className="img--container">
        <img className="card--img" src={thumbnail} loading="lazy" />
      </div>
      <div className="card--body">
        <h3>{title}</h3>
        <p>{members}</p>
        <div className="card--footer">
          <p>{published_at}</p>
          <span>|</span>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};
