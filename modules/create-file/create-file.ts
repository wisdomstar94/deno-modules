import * as path from "https://deno.land/std@0.142.0/path/mod.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

await Deno.writeTextFile(path.join(__dirname, "/hello.txt"), "..");
