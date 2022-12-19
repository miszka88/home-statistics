import { useGenerateGUID } from './useGenerateGUID';
import { useCurrentDate } from './useCurrentDate';

export type FileExtension = 'json';

export const useSaveToFile = () => {
  const { ISODateString } = useCurrentDate();
  const guid = useGenerateGUID();

  const save = (fileExtension: FileExtension, data: Object, fileName: string = guid) => {
    const extraProps = {
      createdAt: ISODateString(),
    };

    const fileData = JSON.stringify({ ...extraProps, data: data }, undefined, 2);
    const element = document.createElement('a');
    const blob = new Blob([fileData], { type: 'text/plain' });
    element.href = URL.createObjectURL(blob);
    element.download = `${fileName}.${fileExtension}`;
    document.body.appendChild(element);
    element.click();
  };

  return save;
};
