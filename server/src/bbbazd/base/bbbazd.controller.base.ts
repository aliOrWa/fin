import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { BbbazdService } from "../bbbazd.service";
import { BbbazdWhereInput } from "./BbbazdWhereInput";
import { BbbazdWhereUniqueInput } from "./BbbazdWhereUniqueInput";
import { BbbazdFindManyArgs } from "./BbbazdFindManyArgs";
import { Bbbazd } from "./Bbbazd";
@swagger.ApiBearerAuth()
export class BbbazdControllerBase {
  constructor(
    protected readonly service: BbbazdService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Bbbazd",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Bbbazd] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => BbbazdFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Bbbazd[]> {
    const args = plainToClass(BbbazdFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Bbbazd",
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
    resource: "Bbbazd",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Bbbazd })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BbbazdWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Bbbazd | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Bbbazd",
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
