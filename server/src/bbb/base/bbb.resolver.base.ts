import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BbbFindManyArgs } from "./BbbFindManyArgs";
import { BbbFindUniqueArgs } from "./BbbFindUniqueArgs";
import { Bbb } from "./Bbb";
import { BbbService } from "../bbb.service";

@graphql.Resolver(() => Bbb)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BbbResolverBase {
  constructor(
    protected readonly service: BbbService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bbb",
    action: "read",
    possession: "any",
  })
  async _bbbsMeta(
    @graphql.Args() args: BbbFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Bbb])
  @nestAccessControl.UseRoles({
    resource: "Bbb",
    action: "read",
    possession: "any",
  })
  async bbbs(
    @graphql.Args() args: BbbFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bbb[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Bbb",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Bbb, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bbb",
    action: "read",
    possession: "own",
  })
  async bbb(
    @graphql.Args() args: BbbFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bbb | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Bbb",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }
}
