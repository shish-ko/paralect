import { appPaths } from "interfaces";

function isListKey(value: string, list: typeof appPaths): value is keyof typeof appPaths {
  return Object.keys(list).includes(value);
}

const getPathname = (path: string): appPaths | null => {
  if(isListKey(path, appPaths)) {
    return appPaths[path];
  }
  return null;
};

export {getPathname};
