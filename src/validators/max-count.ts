import { formatMessage } from '../utils';
import { ValidationError } from '../types';

export const maxCount = (maxCount: number, actualCount: number) => {
  return (errorMessage: string): ValidationError => {
    if (maxCount > -1 && actualCount > maxCount) {
      return formatMessage(errorMessage, [
        maxCount.toString(),
        actualCount.toString(),
      ]);
    }
    return null;
  };
};
