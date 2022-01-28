import { ArgsType, Field } from "@nestjs/graphql";
import { BbbWhereUniqueInput } from "./BbbWhereUniqueInput";

@ArgsType()
class BbbFindUniqueArgs {
  @Field(() => BbbWhereUniqueInput, { nullable: false })
  where!: BbbWhereUniqueInput;
}

export { BbbFindUniqueArgs };
