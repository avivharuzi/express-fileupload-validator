import { UploadedFile } from 'express-fileupload';

import { formatMessage, getFileExtension } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const allowedExtensions = (allowedExtensions: string[]) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const actualExtension = getFileExtension(uploadedFile.name);
      if (
        allowedExtensions.length > 0 &&
        !allowedExtensions.includes(actualExtension)
      ) {
        return formatMessage(errorMessage, [
          uploadedFile.name,
          actualExtension,
          allowedExtensions.join(', '),
        ]);
      }
      return null;
    };
  };
};
