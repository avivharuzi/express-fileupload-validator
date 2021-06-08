import { defaultErrorMessages } from '../../src/defaults';
import { maxCount } from '../../src/validators';

describe('maxCount validator', () => {
  it('should be with error message', () => {
    expect(maxCount(6, 8)(defaultErrorMessages.maxCount)).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(maxCount(6, 1)(defaultErrorMessages.maxCount)).toBeNull();
  });
});
