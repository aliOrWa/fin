import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CdsdcWhereInput } from "./CdsdcWhereInput";
import { Type } from "class-transformer";
import { CdsdcOrderByInput } from "./CdsdcOrderByInput";

@ArgsType()
class CdsdcFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CdsdcWhereInput,
  })
  @Field(() => CdsdcWhereInput, { nullable: true })
  @Type(() => CdsdcWhereInput)
  where?: CdsdcWhereInput;

  @ApiProperty({
    required: false,
    type: CdsdcOrderByInput,
  })
  @Field(() => CdsdcOrderByInput, { nullable: true })
  @Type(() => CdsdcOrderByInput)
  orderBy?: CdsdcOrderByInput;

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

export { CdsdcFindManyArgs };
