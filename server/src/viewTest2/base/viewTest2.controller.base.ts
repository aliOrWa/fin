import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ViewTest2Service } from "../viewTest2.service";
import { ViewTest2WhereInput } from "./ViewTest2WhereInput";
import { ViewTest2WhereUniqueInput } from "./ViewTest2WhereUniqueInput";
import { ViewTest2FindManyArgs } from "./ViewTest2FindManyArgs";
import { ViewTest2 } from "./ViewTest2";
@swagger.ApiBearerAuth()
export class ViewTest2ControllerBase {
  constructor(
    protected readonly service: ViewTest2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "ViewTest2",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ViewTest2] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ViewTest2FindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ViewTest2[]> {
    const args = plainToClass(ViewTest2FindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ViewTest2",
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
    resource: "ViewTest2",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ViewTest2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ViewTest2WhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ViewTest2 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ViewTest2",
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
