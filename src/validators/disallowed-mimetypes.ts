import { UploadedFile } from 'express-fileupload';

import { formatMessage } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const disallowedMimetypes = (disallowedMimetypes: string[]) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const actualMimetype = uploadedFile.mimetype;
      if (disallowedMimetypes.includes(actualMimetype)) {
        return formatMessage(errorMessage, [
          uploadedFile.name,
          actualMimetype,
          disallowedMimetypes.join(', '),
        ]);
      }
      return null;
    };
  };
};
