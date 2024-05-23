import { server } from "axiosConfig";
import { IFilmsSearchRes, IFilters, appPaths } from "interfaces";
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
  const res = await server.get('discover/movie', {params: {...searchParams, language: 'en-US'}});
  console.log(res);
  resSetter(res.data);
};

const getNumberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getTimeString = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60; 
  return  h ? `${h}h ${m}m` : `${m}m`;
};

export { getPathname, apiFetcher, getNumberWithCommas, getTimeString };
