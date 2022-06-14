export const formatDate = (date: string) => {
  const formatedDate = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(formatedDate);
};
