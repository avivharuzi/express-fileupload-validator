import { UploadedFile } from 'express-fileupload';

import * as Validators from './validators';
import { defaultErrorMessages, defaultOptions } from './defaults';
import {
  ErrorMessages,
  ErrorMessagesOptional,
  Options,
  OptionsOptional,
  ValidationError,
  ValidatorFn,
} from './types';
import { ExpressFileuploadValidatorErrors } from './errors';

export class ExpressFileuploadValidator {
  private options: Options = defaultOptions;
  private errorMessages: ErrorMessages = defaultErrorMessages;

  constructor(
    options: OptionsOptional = {},
    errorMessages: ErrorMessagesOptional = {}
  ) {
    this.setOptions(options);
    this.setErrorMessages(errorMessages);
  }

  getOptions(): Options {
    return this.options;
  }

  setOptions(options: OptionsOptional): void {
    this.options = {
      ...defaultOptions,
      ...options,
    };
  }

  getErrorMessages(): ErrorMessages {
    return this.errorMessages;
  }

  setErrorMessages(errorMessages: ErrorMessagesOptional): void {
    this.errorMessages = {
      ...defaultErrorMessages,
      ...errorMessages,
    };
  }

  validate(uploadedFiles: UploadedFile | UploadedFile[]): void {
    let files: UploadedFile[];
    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles;
    } else {
      files = [uploadedFiles];
    }
    this.validateCount(files.length);
    this.validateFiles(files);
  }

  private validateCount(actualCount: number): void {
    const options = this.getOptions();
    const errorMessages = this.getErrorMessages();
    const minCountValidationError = Validators.minCount(
      options.minCount,
      actualCount
    )(errorMessages.minCount);
    if (minCountValidationError !== null) {
      throw new ExpressFileuploadValidatorErrors([minCountValidationError]);
    }
    const maxCountValidationError = Validators.maxCount(
      options.maxCount,
      actualCount
    )(errorMessages.maxCount);
    if (maxCountValidationError !== null) {
      throw new ExpressFileuploadValidatorErrors([maxCountValidationError]);
    }
  }

  private validateFiles(files: UploadedFile[]): void {
    const { abortEarly } = this.getOptions();
    const errors: string[] = [];
    for (const file of files) {
      const validationError = this.validateFile(file);
      if (validationError !== null) {
        errors.push(validationError);
        if (abortEarly) {
          break;
        }
      }
    }
    if (errors.length > 0) {
      throw new ExpressFileuploadValidatorErrors(errors);
    }
  }

  private validateFile(uploadedFile: UploadedFile): ValidationError {
    const validators: ValidatorFn[] = this.getValidators();
    for (const validator of validators) {
      const validationError = validator(uploadedFile);
      if (validationError !== null) {
        return validationError;
      }
    }
    return null;
  }

  private getValidators(): ValidatorFn[] {
    const options = this.getOptions();
    const errorMessages = this.getErrorMessages();
    return [
      Validators.minSize(options.minSize)(errorMessages.minSize),
      Validators.maxSize(options.maxSize)(errorMessages.maxSize),
      Validators.allowedExtensions(options.allowedExtensions)(
        errorMessages.allowedExtensions
      ),
      Validators.disallowedExtensions(options.disallowedExtensions)(
        errorMessages.disallowedExtensions
      ),
      Validators.allowedMimetypes(options.allowedMimetypes)(
        errorMessages.allowedMimetypes
      ),
      Validators.disallowedMimetypes(options.disallowedMimetypes)(
        errorMessages.disallowedMimetypes
      ),
    ];
  }
}
