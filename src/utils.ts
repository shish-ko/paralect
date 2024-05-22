import { DISCOVER_URL } from "constants";
import { IFilmsSearchRes, IFilters, IGenre, appPaths } from "interfaces";
import { Dispatch, SetStateAction } from "react";

function isListKey(value: string, list: typeof appPaths): value is keyof typeof appPaths {
  return Object.keys(list).includes(value);
}

const getPathname = (path: string): appPaths | null => {
  if (isListKey(path, appPaths)) {
    return appPaths[path];
  }
  return null;
};

const apiFetcher = async (searchParams: IFilters, resSetter: Dispatch<SetStateAction<IFilmsSearchRes | undefined>>) => {
  const url = new URL(DISCOVER_URL);

  for (const param in searchParams) {
    const val = searchParams[param as keyof IFilters];
    if (val) {
      if (Array.isArray(val)) {
        val.forEach(value => url.searchParams.append(param, value.toString()));
      } else {
        url.searchParams.append(param, val.toString());
      }
    }
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
      accept: 'application/json',
    }
  });
  const data = await res.json() as IFilmsSearchRes;
  resSetter(data)
  console.log(data);
  console.log(url.toString());
  // url.searchParams.append()
};

export { getPathname, apiFetcher };
