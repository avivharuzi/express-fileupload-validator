import { UploadedFile } from 'express-fileupload';

import { formatMessage } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const allowedMimetypes = (allowedMimetypes: string[]) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const actualMimetype = uploadedFile.mimetype;
      if (
        allowedMimetypes.length > 0 &&
        !allowedMimetypes.includes(actualMimetype)
      ) {
        return formatMessage(errorMessage, [
          uploadedFile.name,
          actualMimetype,
          allowedMimetypes.join(', '),
        ]);
      }
      return null;
    };
  };
};
