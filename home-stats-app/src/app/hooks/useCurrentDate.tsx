export const useCurrentDate = () => {
  const ISODateString = () => new Date().toISOString();
  const numericDate = () => Date.now();
  return { ISODateString, numericDate };
};
