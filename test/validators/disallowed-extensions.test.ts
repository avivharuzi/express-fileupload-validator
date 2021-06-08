import { defaultErrorMessages } from '../../src/defaults';
import { disallowedExtensions } from '../../src/validators';
import { getFakeUploadedFile } from '../../src/utils';

describe('disallowedExtensions validator', () => {
  it('should be with error message', () => {
    expect(
      disallowedExtensions(['mkv', 'ts'])(
        defaultErrorMessages.disallowedExtensions
      )(getFakeUploadedFile({ name: 'example.mkv' }))
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      disallowedExtensions(['mkv', 'ts'])(
        defaultErrorMessages.disallowedExtensions
      )(getFakeUploadedFile({ name: 'example.mp4' }))
    ).toBeNull();
  });
});
