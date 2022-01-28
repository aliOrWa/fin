import { ArgsType, Field } from "@nestjs/graphql";
import { ViewTest2WhereUniqueInput } from "./ViewTest2WhereUniqueInput";

@ArgsType()
class ViewTest2FindUniqueArgs {
  @Field(() => ViewTest2WhereUniqueInput, { nullable: false })
  where!: ViewTest2WhereUniqueInput;
}

export { ViewTest2FindUniqueArgs };
