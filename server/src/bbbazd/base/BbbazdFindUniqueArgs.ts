import { ArgsType, Field } from "@nestjs/graphql";
import { BbbazdWhereUniqueInput } from "./BbbazdWhereUniqueInput";

@ArgsType()
class BbbazdFindUniqueArgs {
  @Field(() => BbbazdWhereUniqueInput, { nullable: false })
  where!: BbbazdWhereUniqueInput;
}

export { BbbazdFindUniqueArgs };
