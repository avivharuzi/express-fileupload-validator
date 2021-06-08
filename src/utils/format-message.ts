export const formatMessage = (
  source: string,
  params: string[] = []
): string => {
  return params.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue.replace(
      new RegExp(`\\{${currentIndex}\\}`, 'g'),
      currentValue
    );
  }, source);
};
