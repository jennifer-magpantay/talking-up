export const convertTime = (value: any) => {
  const time = Number(value);
  let hour = Math.floor(time / 3600);
  const min = Math.floor((time - hour * 3600) / 60);
  const sec = time - hour * 3600 - min * 60;

  // formating by 2 digits
  const hours = twoDigitFormat(hour);
  const minutes = twoDigitFormat(min);
  const seconds = twoDigitFormat(sec);

  // validating results under 01h
  const convertedTime =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

  return convertedTime;
};

export const twoDigitFormat = (value: number) => {
  const stringValue = value.toString();
  return stringValue.padStart(2, "0");
};
