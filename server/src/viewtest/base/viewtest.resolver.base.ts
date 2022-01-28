import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ViewtestFindManyArgs } from "./ViewtestFindManyArgs";
import { ViewtestFindUniqueArgs } from "./ViewtestFindUniqueArgs";
import { Viewtest } from "./Viewtest";
import { ViewtestService } from "../viewtest.service";

@graphql.Resolver(() => Viewtest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ViewtestResolverBase {
  constructor(
    protected readonly service: ViewtestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Viewtest",
    action: "read",
    possession: "any",
  })
  async _viewtestsMeta(
    @graphql.Args() args: ViewtestFindManyArgs
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

  @graphql.Query(() => [Viewtest])
  @nestAccessControl.UseRoles({
    resource: "Viewtest",
    action: "read",
    possession: "any",
  })
  async viewtests(
    @graphql.Args() args: ViewtestFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Viewtest[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Viewtest",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Viewtest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Viewtest",
    action: "read",
    possession: "own",
  })
  async viewtest(
    @graphql.Args() args: ViewtestFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Viewtest | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Viewtest",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }
}
