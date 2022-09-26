export enum FETCHSTATES {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type PostData = {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
};

export type PostsData = {
  title: string;
  body: string;
  userId: number;
};
