import { ExistFileState } from "./exist-file.interface.ts";

export const isExistFile = async(filePath: string): Promise<ExistFileState> => {
  try {
    await Deno.stat(filePath);
    return 'exist';
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return 'not-exist';
    }

    console.error(`${filePath} 경로의 파일이 존재하는지 체크하는 도중 에러 발생!`);
    console.error(`error.name :`, error.name);
    console.error(`error.stack :`, error.stack);
    return 'error';
  }
};
