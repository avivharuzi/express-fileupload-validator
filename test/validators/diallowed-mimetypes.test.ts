import { defaultErrorMessages } from '../../src/defaults';
import { disallowedMimetypes } from '../../src/validators';
import { getFakeUploadedFile } from '../../src/utils';

describe('disallowedMimetypes validator', () => {
  it('should be with error message', () => {
    expect(
      disallowedMimetypes(['text/html', 'text/plain'])(
        defaultErrorMessages.disallowedMimetypes
      )(getFakeUploadedFile({ mimetype: 'text/plain' }))
    ).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(
      disallowedMimetypes(['text/html', 'text/plain'])(
        defaultErrorMessages.disallowedMimetypes
      )(getFakeUploadedFile({ mimetype: 'text/csv' }))
    ).toBeNull();
  });
});
