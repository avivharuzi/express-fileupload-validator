import { allowedMimetypes } from '../../src/validators';
import { defaultErrorMessages } from '../../src/defaults';
import { getFakeUploadedFile } from '../../src/utils';

describe('allowedMimetypes validator', () => {
  it('should be with error message', () => {
    expect(
      allowedMimetypes(['image/png', 'image/jpg'])(
        defaultErrorMessages.allowedMimetypes
      )(getFakeUploadedFile({ mimetype: 'video/mp4' }))
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      allowedMimetypes(['image/png', 'image/jpg'])(
        defaultErrorMessages.allowedMimetypes
      )(getFakeUploadedFile({ mimetype: 'image/png' }))
    ).toBeNull();
  });
});
