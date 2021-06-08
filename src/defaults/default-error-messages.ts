import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages = {
  minCount: 'Too few files, minimum {0} are expected but {1} are given',
  maxCount: 'Too many files, maximum {0} are allowed but {1} are given',
  minSize: 'Minimum expected size for file {0} is {1} but {2} detected',
  maxSize: 'Maximum allowed size for file {0} is {1} but {2} detected',
  allowedExtensions:
    'File {0} has an incorrect extension of {1}, allowed extensions are: {2}',
  disallowedExtensions:
    'File {0} has an incorrect extension of {1}, disallowed extensions are: {2}',
  allowedMimetypes:
    'File {0} has an incorrect mimetype of {1}, allowed mimetypes are: {2}',
  disallowedMimetypes:
    'File {0} has an incorrect mimetype of {1}, disallowed mimetypes are: {2}',
};
