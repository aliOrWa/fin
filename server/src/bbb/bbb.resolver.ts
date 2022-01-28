import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BbbResolverBase } from "./base/bbb.resolver.base";
import { Bbb } from "./base/Bbb";
import { BbbService } from "./bbb.service";

@graphql.Resolver(() => Bbb)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BbbResolver extends BbbResolverBase {
  constructor(
    protected readonly service: BbbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
