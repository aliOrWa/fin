import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BbbazdFindManyArgs } from "./BbbazdFindManyArgs";
import { BbbazdFindUniqueArgs } from "./BbbazdFindUniqueArgs";
import { Bbbazd } from "./Bbbazd";
import { BbbazdService } from "../bbbazd.service";

@graphql.Resolver(() => Bbbazd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BbbazdResolverBase {
  constructor(
    protected readonly service: BbbazdService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bbbazd",
    action: "read",
    possession: "any",
  })
  async _bbbsMeta(
    @graphql.Args() args: BbbazdFindManyArgs
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

  @graphql.Query(() => [Bbbazd])
  @nestAccessControl.UseRoles({
    resource: "Bbbazd",
    action: "read",
    possession: "any",
  })
  async bbbs(
    @graphql.Args() args: BbbazdFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bbbazd[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Bbbazd",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Bbbazd, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bbbazd",
    action: "read",
    possession: "own",
  })
  async bbbazd(
    @graphql.Args() args: BbbazdFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Bbbazd | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Bbbazd",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }
}
