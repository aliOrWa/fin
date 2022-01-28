import { ArgsType, Field } from "@nestjs/graphql";
import { ViewtestWhereUniqueInput } from "./ViewtestWhereUniqueInput";

@ArgsType()
class ViewtestFindUniqueArgs {
  @Field(() => ViewtestWhereUniqueInput, { nullable: false })
  where!: ViewtestWhereUniqueInput;
}

export { ViewtestFindUniqueArgs };
