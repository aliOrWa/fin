import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ViewTest2FindManyArgs } from "./ViewTest2FindManyArgs";
import { ViewTest2FindUniqueArgs } from "./ViewTest2FindUniqueArgs";
import { ViewTest2 } from "./ViewTest2";
import { ViewTest2Service } from "../viewTest2.service";

@graphql.Resolver(() => ViewTest2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ViewTest2ResolverBase {
  constructor(
    protected readonly service: ViewTest2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ViewTest2",
    action: "read",
    possession: "any",
  })
  async _viewTest2sMeta(
    @graphql.Args() args: ViewTest2FindManyArgs
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

  @graphql.Query(() => [ViewTest2])
  @nestAccessControl.UseRoles({
    resource: "ViewTest2",
    action: "read",
    possession: "any",
  })
  async viewTest2s(
    @graphql.Args() args: ViewTest2FindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ViewTest2[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ViewTest2",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ViewTest2, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ViewTest2",
    action: "read",
    possession: "own",
  })
  async viewTest2(
    @graphql.Args() args: ViewTest2FindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ViewTest2 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ViewTest2",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }
}
