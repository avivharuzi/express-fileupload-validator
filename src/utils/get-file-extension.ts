export const getFileExtension = (fileName: string): string => {
  return fileName.split('.').pop() || fileName;
};
