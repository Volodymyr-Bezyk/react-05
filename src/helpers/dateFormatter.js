export const dateFormatter = date => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};
