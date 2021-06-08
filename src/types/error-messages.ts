export interface ErrorMessages {
  minCount: string;
  maxCount: string;
  minSize: string;
  maxSize: string;
  allowedExtensions: string;
  disallowedExtensions: string;
  allowedMimetypes: string;
  disallowedMimetypes: string;
}

export interface ErrorMessagesOptional {
  minCount?: string;
  maxCount?: string;
  minSize?: string;
  maxSize?: string;
  allowedExtensions?: string;
  disallowedExtensions?: string;
  allowedMimetypes?: string;
  disallowedMimetypes?: string;
}
