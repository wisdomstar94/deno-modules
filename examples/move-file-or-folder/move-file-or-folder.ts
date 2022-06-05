import * as path from "https://deno.land/std@0.142.0/path/mod.ts";
import { moveFileOrFolder } from "../../modules/move-file-or-folder/move-file-or-folder.ts"; 
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const result = await moveFileOrFolder(path.join(__dirname, '/folder122'), path.join(__dirname, '/folder2'));
console.log('result', result);
