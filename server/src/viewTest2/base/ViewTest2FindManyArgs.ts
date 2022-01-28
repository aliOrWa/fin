import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ViewTest2WhereInput } from "./ViewTest2WhereInput";
import { Type } from "class-transformer";
import { ViewTest2OrderByInput } from "./ViewTest2OrderByInput";

@ArgsType()
class ViewTest2FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ViewTest2WhereInput,
  })
  @Field(() => ViewTest2WhereInput, { nullable: true })
  @Type(() => ViewTest2WhereInput)
  where?: ViewTest2WhereInput;

  @ApiProperty({
    required: false,
    type: ViewTest2OrderByInput,
  })
  @Field(() => ViewTest2OrderByInput, { nullable: true })
  @Type(() => ViewTest2OrderByInput)
  orderBy?: ViewTest2OrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ViewTest2FindManyArgs };
