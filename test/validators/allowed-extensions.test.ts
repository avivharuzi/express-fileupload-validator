import { allowedExtensions } from '../../src/validators';
import { defaultErrorMessages } from '../../src/defaults';
import { getFakeUploadedFile } from '../../src/utils';

describe('allowedExtensions validator', () => {
  it('should be with error message', () => {
    expect(
      allowedExtensions(['jpg'])(defaultErrorMessages.allowedExtensions)(
        getFakeUploadedFile({ name: 'example.mp4' })
      )
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      allowedExtensions(['jpg', 'png'])(defaultErrorMessages.allowedExtensions)(
        getFakeUploadedFile({ name: 'example.jpg' })
      )
    ).toBeNull();
  });
});
