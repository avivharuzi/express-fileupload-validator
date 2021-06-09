export class ExpressFileuploadValidatorErrors extends Error {
  errors: string[];

  constructor(errors: string[], message?: string) {
    super(message);
    Object.setPrototypeOf(this, ExpressFileuploadValidatorErrors.prototype);
    this.errors = errors;
  }
}
