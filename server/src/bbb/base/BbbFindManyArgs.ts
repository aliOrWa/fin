import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BbbWhereInput } from "./BbbWhereInput";
import { Type } from "class-transformer";
import { BbbOrderByInput } from "./BbbOrderByInput";

@ArgsType()
class BbbFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BbbWhereInput,
  })
  @Field(() => BbbWhereInput, { nullable: true })
  @Type(() => BbbWhereInput)
  where?: BbbWhereInput;

  @ApiProperty({
    required: false,
    type: BbbOrderByInput,
  })
  @Field(() => BbbOrderByInput, { nullable: true })
  @Type(() => BbbOrderByInput)
  orderBy?: BbbOrderByInput;

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

export { BbbFindManyArgs };
