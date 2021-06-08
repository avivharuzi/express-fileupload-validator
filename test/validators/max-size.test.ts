import { defaultErrorMessages } from '../../src/defaults';
import { getFakeUploadedFile } from '../../src/utils';
import { maxSize } from '../../src/validators';

describe('maxSize validator', () => {
  it('should be with error message', () => {
    expect(
      maxSize('1GB')(defaultErrorMessages.maxSize)(
        getFakeUploadedFile({ size: 2147483648 })
      )
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      maxSize('1GB')(defaultErrorMessages.maxSize)(
        getFakeUploadedFile({ size: 536870912 })
      )
    ).toBeNull();
  });
});
