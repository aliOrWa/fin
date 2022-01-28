import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { BbbService } from "../bbb.service";
import { BbbWhereInput } from "./BbbWhereInput";
import { BbbWhereUniqueInput } from "./BbbWhereUniqueInput";
import { BbbFindManyArgs } from "./BbbFindManyArgs";
import { Bbb } from "./Bbb";
@swagger.ApiBearerAuth()
export class BbbControllerBase {
  constructor(
    protected readonly service: BbbService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Bbb",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Bbb] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => BbbFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Bbb[]> {
    const args = plainToClass(BbbFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Bbb",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ahmed: true,
        username: true,
        dzadzad: true,
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
    resource: "Bbb",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Bbb })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BbbWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Bbb | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Bbb",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ahmed: true,
        username: true,
        dzadzad: true,
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
