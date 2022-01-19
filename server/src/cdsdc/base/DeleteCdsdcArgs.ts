import { ArgsType, Field } from "@nestjs/graphql";
import { CdsdcWhereUniqueInput } from "./CdsdcWhereUniqueInput";

@ArgsType()
class DeleteCdsdcArgs {
  @Field(() => CdsdcWhereUniqueInput, { nullable: false })
  where!: CdsdcWhereUniqueInput;
}

export { DeleteCdsdcArgs };
