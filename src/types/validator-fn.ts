import { UploadedFile } from 'express-fileupload';

import { ValidationError } from './validation-error';

export type ValidatorFn = (uploadedFile: UploadedFile) => ValidationError;
