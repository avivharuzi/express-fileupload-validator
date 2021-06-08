import { UploadedFile } from 'express-fileupload';

import { formatMessage, getFileExtension } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const disallowedExtensions = (disallowedExtensions: string[]) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const actualExtension = getFileExtension(uploadedFile.name);
      if (disallowedExtensions.includes(actualExtension)) {
        return formatMessage(errorMessage, [
          uploadedFile.name,
          actualExtension,
          disallowedExtensions.join(', '),
        ]);
      }
      return null;
    };
  };
};
