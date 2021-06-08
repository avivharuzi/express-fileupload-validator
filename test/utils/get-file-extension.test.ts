import { getFileExtension } from '../../src/utils';

describe('getFileExtension', () => {
  it('should be jpg', () => {
    expect(getFileExtension('example.jpg')).toEqual('jpg');
  });

  it('should be png', () => {
    expect(getFileExtension('example.bla.bla.png')).toEqual('png');
  });

  it('should be im-without-file-extension', () => {
    expect(getFileExtension('im-without-file-extension')).toEqual(
      'im-without-file-extension'
    );
  });
});
