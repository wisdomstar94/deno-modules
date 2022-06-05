import * as path from "https://deno.land/std@0.142.0/path/mod.ts";
import { writeFile } from "../../modules/write-file/write-file.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const result = await writeFile(path.join(__dirname, '/test.txt'), '안녕하세요', { append: true });
console.log('result');
