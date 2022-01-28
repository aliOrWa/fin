import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ViewtestService } from "../viewtest.service";
import { ViewtestWhereInput } from "./ViewtestWhereInput";
import { ViewtestWhereUniqueInput } from "./ViewtestWhereUniqueInput";
import { ViewtestFindManyArgs } from "./ViewtestFindManyArgs";
import { Viewtest } from "./Viewtest";
@swagger.ApiBearerAuth()
export class ViewtestControllerBase {
  constructor(
    protected readonly service: ViewtestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Viewtest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Viewtest] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ViewtestFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Viewtest[]> {
    const args = plainToClass(ViewtestFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Viewtest",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Viewtest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Viewtest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ViewtestWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Viewtest | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Viewtest",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }
}
