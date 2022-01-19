import { ArgsType, Field } from "@nestjs/graphql";
import { CdsdcWhereUniqueInput } from "./CdsdcWhereUniqueInput";

@ArgsType()
class CdsdcFindUniqueArgs {
  @Field(() => CdsdcWhereUniqueInput, { nullable: false })
  where!: CdsdcWhereUniqueInput;
}

export { CdsdcFindUniqueArgs };
