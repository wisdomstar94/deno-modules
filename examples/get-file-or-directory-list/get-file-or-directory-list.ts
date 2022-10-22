type TargetType = 'all' | 'dir' | 'file';
interface ResultInfo {
  dirNames: string[];
  fileNames: string[];
}

const args = Deno.args;
const targetPath = args[0];
const targetType = args[1] as TargetType | undefined;

if (typeof targetPath !== 'string' || targetPath.trim() === '') {
  throw new Error(`targetPath 가 올바르지 않습니다.`);
}

async function getItems() {
  const resultInfo: ResultInfo = {
    dirNames: [],
    fileNames: [],
  };
  
  for await (const dirEntry of Deno.readDir(targetPath)) {
    if (dirEntry.isDirectory) {
      resultInfo.dirNames.push(dirEntry.name);
    } else {
      resultInfo.fileNames.push(dirEntry.name);
    }
  }

  return resultInfo;
}

try {
  const info = await getItems();
  info.dirNames.sort();
  info.fileNames.sort();

  if (targetType === 'file') {
    console.log(info.fileNames.join('\n'));
  } else if (targetType === 'dir') {
    console.log(info.dirNames.join('\n'));
  } else {
    console.log(info);
  }
} catch (e) {
  console.error(e);
}
  