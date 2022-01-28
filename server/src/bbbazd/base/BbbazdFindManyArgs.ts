import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BbbazdWhereInput } from "./BbbazdWhereInput";
import { Type } from "class-transformer";
import { BbbazdOrderByInput } from "./BbbazdOrderByInput";

@ArgsType()
class BbbazdFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BbbazdWhereInput,
  })
  @Field(() => BbbazdWhereInput, { nullable: true })
  @Type(() => BbbazdWhereInput)
  where?: BbbazdWhereInput;

  @ApiProperty({
    required: false,
    type: BbbazdOrderByInput,
  })
  @Field(() => BbbazdOrderByInput, { nullable: true })
  @Type(() => BbbazdOrderByInput)
  orderBy?: BbbazdOrderByInput;

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

export { BbbazdFindManyArgs };
