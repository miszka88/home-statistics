import { useGenerateGUID } from './useGenerateGUID';

export type FileExtension = 'json';

export const useSaveToFile = () => {
  const guid = useGenerateGUID();

  const save = (fileExtension: FileExtension, data: Object, fileName: string = guid) => {
    const fileData = JSON.stringify(data, undefined, 2);

    const element = document.createElement('a');
    const blob = new Blob([fileData], { type: 'text/plain' });
    element.href = URL.createObjectURL(blob);
    element.download = `${fileName}.${fileExtension}`;
    document.body.appendChild(element);
    element.click();
  };

  const update = (fileName: string, data: Object) => {
    save('json', data, fileName);
  };

  return { save, update };
};
