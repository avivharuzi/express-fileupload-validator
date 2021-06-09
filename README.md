# express-fileupload-validator

![NPM](https://img.shields.io/npm/l/express-fileupload-validator.svg) ![GitHub package.json version](https://img.shields.io/github/package-json/v/avivharuzi/express-fileupload-validator.svg) ![CircleCI](https://img.shields.io/circleci/build/github/avivharuzi/express-fileupload-validator)

Validator for [express-fileupload](https://www.npmjs.com/package/express) package.

## Installation

```sh
npm i express-fileupload
```

## Prerequisites

In order to use this package you need to use [express](https://www.npmjs.com/package/express) alongside [express-fileupload](https://www.npmjs.com/package/express).

```js
const express = require('express');
const expressFileupload = require('express-fileupload');

const app = express();
// ...
app.use(expressFileupload());

app.listen(8080);
```

## Basic Usage

```js
const express = require('express');
const { ExpressFileuploadValidator } = require('express-fileupload-validator');

// You can export it to reuse the same validations.
const expressFileuploadValidator = new ExpressFileuploadValidator({
  minCount: 2,
  maxCount: 8,
  allowedExtensions: ['jpg', 'png', 'gif'],
  allowedMimetypes: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'],
  maxSize: '20MB',
});

const router = Router();

router.post('/upload-images', (req, res) => {
  if (!req.files || !req.files.images) {
    // We didn't get any files at all here..
  }

  try {
    expressFileuploadValidator.validate(req.files.images); // Validate the file or files.
    // Everything ok we can save the files safely now :)
  } catch (e) {
    console.log(e.errors); // Validation error messages...
  }
});
```

## API

### new ExpressFileuploadValidator(options?, errorMessages?)

#### options

Type: `object`

In addition, you can specify the below options.

##### minCount

Type: `number`\
Default: `-1` (no limit)

The number of minimum files.

##### maxCount

Type: `number`\
Default: `-1` (no limit)

The number of maximum files.

##### minSize

Type: `string | number`\
Default: `-1` (no limit)

The minimum size per file.\
Can be formatted size, for example: `2MB`, `5GB` and etc.\
Can be size in bytes, for example: `6291456` which is 6MB.

#### maxSize

Type: `string | number`\
Default: `-1` (no limit)

The maximum size per file.\
Can be formatted size, for example: `2MB`, `5GB` and etc.\
Can be size in bytes, for example: `6291456` which is 6MB.

#### allowedExtensions

Type: `string[]`\
Default: `[]`

List of allowed file extensions, for example: `['jpg', 'png']`.

#### disallowedExtensions

Type: `string[]`\
Default: `[]`

List of disallowed file extensions, for example: `['jpg', 'png']`.

#### allowedMimetypes

Type: `string[]`\
Default: `[]`

List of allowed file mimetypes, for example: `['image/jpg', 'image/png']`.

#### disallowedMimetypes

Type: `string[]`\
Default: `[]`

List of disallowed file mimetypes, for example: `['image/jpg', 'image/png']`.

#### abortEarly

Type: `bool`\
Default: `true`

Will decide if to abort as soon as possible, that means you will always gets the first error.
If abortEarly is `false` you will get all collected files errors.

#### errorMessages

You can specify object with your custom error messages.
Please notice you need to keep the placeholders {} to keep the error messages clean.

```js
const expressFileuploadValidator = new ExpressFileuploadValidator({}, {
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
});
```

### ExpressFileuploadValidator.setOptions(options)

### ExpressFileuploadValidator.getOptions()

### ExpressFileuploadValidator.setErrorMessages(errorMessages)

### ExpressFileuploadValidator.getErrorMessages()

### ExpressFileuploadValidator.validate()

Throws `ExpressFileuploadValidatorErrors` if there are errors.

# License

[MIT](LICENSE)
