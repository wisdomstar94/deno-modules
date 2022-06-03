import * as path from "https://deno.land/std@0.142.0/path/mod.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const decoder = new TextDecoder('utf-8');

const filePath = path.join(__dirname, '/read-file.sample.txt');
console.log('filePath', filePath);

const fileContent = decoder.decode(await Deno.readFile(filePath));
console.log('fileContent', fileContent);
