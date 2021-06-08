export interface Options {
  minCount: number;
  maxCount: number;
  minSize: string | number;
  maxSize: string | number;
  allowedExtensions: string[];
  disallowedExtensions: string[];
  allowedMimetypes: string[];
  disallowedMimetypes: string[];
  abortEarly: boolean;
}

export interface OptionsOptional {
  minCount?: number;
  maxCount?: number;
  minSize?: string | number;
  maxSize?: string | number;
  allowedExtensions?: string[];
  disallowedExtensions?: string[];
  allowedMimetypes?: string[];
  disallowedMimetypes?: string[];
  abortEarly?: boolean;
}
