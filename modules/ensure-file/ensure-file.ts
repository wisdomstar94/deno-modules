import { IensureFile } from "./ensure-file.interface.ts";

export const ensureFile = async(filePath: string): Promise<IensureFile.State> => {
  try {
    await ensureFile(filePath);
    return 'success';
  } catch (error) {
    console.error(`${filePath} 경로에 대해 ensureFile 함수가 실행되던 도중 에러 발생!`);
    console.error(`error.name :`, error.name);
    console.error(`error.stack :`, error.stack);
    return 'error';
  }
};
