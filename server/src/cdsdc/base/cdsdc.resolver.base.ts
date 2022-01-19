import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteCdsdcArgs } from "./DeleteCdsdcArgs";
import { CdsdcFindManyArgs } from "./CdsdcFindManyArgs";
import { CdsdcFindUniqueArgs } from "./CdsdcFindUniqueArgs";
import { Cdsdc } from "./Cdsdc";
import { CdsdcService } from "../cdsdc.service";

@graphql.Resolver(() => Cdsdc)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CdsdcResolverBase {
  constructor(
    protected readonly service: CdsdcService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Cdsdc",
    action: "read",
    possession: "any",
  })
  async _cdsdcsMeta(
    @graphql.Args() args: CdsdcFindManyArgs
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

  @graphql.Query(() => [Cdsdc])
  @nestAccessControl.UseRoles({
    resource: "Cdsdc",
    action: "read",
    possession: "any",
  })
  async cdsdcs(
    @graphql.Args() args: CdsdcFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Cdsdc[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Cdsdc",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Cdsdc, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cdsdc",
    action: "read",
    possession: "own",
  })
  async cdsdc(
    @graphql.Args() args: CdsdcFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Cdsdc | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Cdsdc",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Cdsdc)
  @nestAccessControl.UseRoles({
    resource: "Cdsdc",
    action: "delete",
    possession: "any",
  })
  async deleteCdsdc(
    @graphql.Args() args: DeleteCdsdcArgs
  ): Promise<Cdsdc | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
