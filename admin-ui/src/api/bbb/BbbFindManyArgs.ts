import { BbbWhereInput } from "./BbbWhereInput";
import { BbbOrderByInput } from "./BbbOrderByInput";

export type BbbFindManyArgs = {
  where?: BbbWhereInput;
  orderBy?: BbbOrderByInput;
  skip?: number;
  take?: number;
};
