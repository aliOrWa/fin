import { Bbbazd as TBbbazd } from "../api/bbbazd/Bbbazd";

export const BBBAZD_TITLE_FIELD = "username";

export const BbbazdTitle = (record: TBbbazd): string => {
  return record.username || record.id;
};
