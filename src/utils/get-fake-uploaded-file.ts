import { UploadedFile } from 'express-fileupload';

interface FakeUploadedFileArgs {
  name?: string;
  mimetype?: string;
  size?: number;
}

export const getFakeUploadedFile = ({
  name,
  mimetype,
  size,
}: FakeUploadedFileArgs = {}): UploadedFile => {
  return {
    name: name ?? '',
    encoding: '',
    mimetype: mimetype ?? '',
    data: new Buffer('123456'),
    tempFilePath: '',
    truncated: true,
    size: size ?? 0,
    md5: '',
    mv: () => Promise.resolve(),
  };
};
