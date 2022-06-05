import { IWriteFile } from "./write-file.interface.ts";

export const writeFile = async(filePath: string, newContent: string, options?: Deno.WriteFileOptions): Promise<IWriteFile.State> => {
  try {
    await Deno.writeTextFile(filePath, newContent, options);
    return 'success';
  } catch (error) {
    console.error(`${filePath} 경로의 파일에 내용을 write 하던 도중 에러 발생!`);
    console.error(`error.name :`, error.name);
    console.error(`error.stack :`, error.stack);
    return 'error';
  }
};
