import { ViewTest2 as TViewTest2 } from "../api/viewTest2/ViewTest2";

export const VIEWTEST2_TITLE_FIELD = "id";

export const ViewTest2Title = (record: TViewTest2): string => {
  return record.id || record.id;
};
