import * as bytes from 'bytes';
import { UploadedFile } from 'express-fileupload';

import { formatMessage } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const maxSize = (maxSize: string | number) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const uploadedFileSizeInBytes = uploadedFile.size;
      const maxSizeInBytes = bytes.parse(maxSize);
      if (maxSize !== -1 && uploadedFileSizeInBytes > maxSizeInBytes) {
        const maxSizeFormatted = bytes.format(maxSizeInBytes);
        const actualSizeFormatted = bytes.format(uploadedFileSizeInBytes);
        return formatMessage(errorMessage, [
          uploadedFile.name,
          maxSizeFormatted,
          actualSizeFormatted,
        ]);
      }
      return null;
    };
  };
};
