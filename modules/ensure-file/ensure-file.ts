import { ensureFile } from "https://deno.land/std@0.142.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.142.0/path/mod.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

/**
 * filePath 가 존재하지 않으면 filePath 를 생성.
 * 이 때, 폴더 depth 가 여러개더라도 해당 폴더도 자동 생성됨. (node.js 에서 폴더를 생성할 때 recursive 옵션과 비슷함.)
 * 
 * filePath 가 이미 존재하면 아무일도 일어나지 않음.
 * 
 * 폴더는 해당되지 않음. 생성된다면 무조건 파일임.
 */
await ensureFile(path.join(__dirname, '/f1/f2/f3/f4/file.txt'));
await Deno.writeTextFile(path.join(__dirname, "/f1/f2/f3/f4/file.txt"), "..\n", { append: true });