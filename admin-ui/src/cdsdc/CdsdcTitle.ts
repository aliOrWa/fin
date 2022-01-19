import { Cdsdc as TCdsdc } from "../api/cdsdc/Cdsdc";

export const CDSDC_TITLE_FIELD = "id";

export const CdsdcTitle = (record: TCdsdc): string => {
  return record.id || record.id;
};
