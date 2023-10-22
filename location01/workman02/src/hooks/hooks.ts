export const convertViewDate = (time: string) => {
  const jsonDate = new Date(time);
  const convertText = `${jsonDate.getFullYear()}年${jsonDate.getMonth() + 1}月${jsonDate.getDate()}日`;
  return convertText;
}