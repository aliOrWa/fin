import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ViewtestWhereInput } from "./ViewtestWhereInput";
import { Type } from "class-transformer";
import { ViewtestOrderByInput } from "./ViewtestOrderByInput";

@ArgsType()
class ViewtestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ViewtestWhereInput,
  })
  @Field(() => ViewtestWhereInput, { nullable: true })
  @Type(() => ViewtestWhereInput)
  where?: ViewtestWhereInput;

  @ApiProperty({
    required: false,
    type: ViewtestOrderByInput,
  })
  @Field(() => ViewtestOrderByInput, { nullable: true })
  @Type(() => ViewtestOrderByInput)
  orderBy?: ViewtestOrderByInput;

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

export { ViewtestFindManyArgs };
