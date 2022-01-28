import { Bbb as TBbb } from "../api/bbb/Bbb";

export const BBB_TITLE_FIELD = "username";

export const BbbTitle = (record: TBbb): string => {
  return record.username || record.id;
};
