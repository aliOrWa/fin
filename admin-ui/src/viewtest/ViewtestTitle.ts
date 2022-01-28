import { Viewtest as TViewtest } from "../api/viewtest/Viewtest";

export const VIEWTEST_TITLE_FIELD = "id";

export const ViewtestTitle = (record: TViewtest): string => {
  return record.id || record.id;
};
