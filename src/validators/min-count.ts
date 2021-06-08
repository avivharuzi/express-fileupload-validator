import { formatMessage } from '../utils';
import { ValidationError } from '../types';

export const minCount = (minCount: number, actualCount: number) => {
  return (errorMessage: string): ValidationError => {
    if (minCount > -1 && actualCount < minCount) {
      return formatMessage(errorMessage, [
        minCount.toString(),
        actualCount.toString(),
      ]);
    }
    return null;
  };
};
