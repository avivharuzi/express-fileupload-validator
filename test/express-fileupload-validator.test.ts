import {
  ExpressFileuploadValidator,
  ExpressFileuploadValidatorErrors,
} from '../src';
import { getFakeUploadedFile } from '../src/utils';

describe('ExpressFileuploadValidator', () => {
  it('should throw an error', () => {
    expect(() => {
      const expressFileuploadValidator = new ExpressFileuploadValidator({
        minCount: 2,
      });
      expressFileuploadValidator.validate(getFakeUploadedFile());
    }).toThrow(ExpressFileuploadValidatorErrors);

    expect(() => {
      const expressFileuploadValidator = new ExpressFileuploadValidator({
        allowedMimetypes: ['video/mp4'],
      });
      expressFileuploadValidator.validate(
        getFakeUploadedFile({ mimetype: 'video/mkv' })
      );
    }).toThrow(ExpressFileuploadValidatorErrors);
  });

  it('should not thrown an error', () => {
    const expressFileuploadValidator = new ExpressFileuploadValidator({
      allowedExtensions: ['jpg', 'png'],
    });

    expect(
      expressFileuploadValidator.validate(
        getFakeUploadedFile({ name: 'example.jpg' })
      )
    ).toBeUndefined();

    expressFileuploadValidator.setOptions({ minSize: '4MB' });

    expect(
      expressFileuploadValidator.validate(
        getFakeUploadedFile({ size: 6291456 })
      )
    ).toBeUndefined();
  });
});
