import * as bytes from 'bytes';
import { UploadedFile } from 'express-fileupload';

import { formatMessage } from '../utils';
import { ValidationError, ValidatorFn } from '../types';

export const minSize = (minSize: string | number) => {
  return (errorMessage: string): ValidatorFn => {
    return (uploadedFile: UploadedFile): ValidationError => {
      const uploadedFileSizeInBytes = uploadedFile.size;
      const minSizeInBytes = bytes.parse(minSize);
      if (minSize !== -1 && uploadedFileSizeInBytes < minSizeInBytes) {
        const minSizeFormatted = bytes.format(minSizeInBytes);
        const uploadedFileSizeFormatted = bytes.format(uploadedFileSizeInBytes);
        return formatMessage(errorMessage, [
          uploadedFile.name,
          minSizeFormatted,
          uploadedFileSizeFormatted,
        ]);
      }
      return null;
    };
  };
};
