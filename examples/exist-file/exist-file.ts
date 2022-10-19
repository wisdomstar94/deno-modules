import { isExistFile } from "../../modules/exist-file/exist-file.ts";
import * as path from "https://deno.land/std@0.160.0/path/mod.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const result = await isExistFile(path.join(__dirname, '/f1/f2/file.txt'));
console.log('result', result);
