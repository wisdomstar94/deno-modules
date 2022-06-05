import { move } from "https://deno.land/std@0.142.0/fs/move.ts";
import { ImoveFileOrFolder } from "./move-file-or-folder.interface.ts";

export const moveFileOrFolder = async(beforeFileOrFolderPath: string, afterFileOrFolderPath: string): Promise<ImoveFileOrFolder.State> => {
  try {
    await move(beforeFileOrFolderPath, afterFileOrFolderPath);
    return 'success';
  } catch (error) {
    if (error.name === 'NotFound') {
      return 'target-not-found';
    }

    console.error(`${beforeFileOrFolderPath} 경로의 파일/폴더를 ${afterFileOrFolderPath} 으로 move 하던 도중 에러 발생!`);
    console.error(`error.name :`, error.name);
    console.error(`error.stack :`, error.stack);
    return 'error';
  }
};
