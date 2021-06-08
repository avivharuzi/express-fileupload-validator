import { defaultErrorMessages } from '../../src/defaults';
import { minCount } from '../../src/validators';

describe('minCount validator', () => {
  it('should be with error message', () => {
    expect(minCount(2, 1)(defaultErrorMessages.minCount)).toBeTruthy();
  });

  it('should be without error message', () => {
    expect(minCount(2, 4)(defaultErrorMessages.minCount)).toBeNull();
  });
});
