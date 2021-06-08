import { defaultErrorMessages } from '../../src/defaults';
import { getFakeUploadedFile } from '../../src/utils';
import { minSize } from '../../src/validators';

describe('minSize validator', () => {
  it('should be with error message', () => {
    expect(
      minSize('2MB')(defaultErrorMessages.minSize)(
        getFakeUploadedFile({ size: 1048576 })
      )
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      minSize('4MB')(defaultErrorMessages.minSize)(
        getFakeUploadedFile({ size: 6291456 })
      )
    ).toBeNull();
  });
});
