import { formatMessage } from '../../src/utils';

describe('formatMessage', () => {
  it('should be the same', () => {
    const message = "I'm without placeholders at all.";
    expect(formatMessage(message)).toEqual(message);
  });

  it('should be formatted with all placeholders', () => {
    expect(
      formatMessage('My name is {0} and my age is {1}.', ['Aviv', '25'])
    ).toEqual('My name is Aviv and my age is 25.');
  });

  it('should be formatted with partial placeholders', () => {
    expect(formatMessage('First: {0}, second: {1}.', ['hello'])).toEqual(
      'First: hello, second: {1}.'
    );
  });
});
