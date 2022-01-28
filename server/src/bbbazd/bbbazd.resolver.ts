import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BbbazdResolverBase } from "./base/bbbazd.resolver.base";
import { Bbbazd } from "./base/Bbbazd";
import { BbbazdService } from "./bbbazd.service";

@graphql.Resolver(() => Bbbazd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BbbazdResolver extends BbbazdResolverBase {
  constructor(
    protected readonly service: BbbazdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
