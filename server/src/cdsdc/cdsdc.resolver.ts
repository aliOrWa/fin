import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CdsdcResolverBase } from "./base/cdsdc.resolver.base";
import { Cdsdc } from "./base/Cdsdc";
import { CdsdcService } from "./cdsdc.service";

@graphql.Resolver(() => Cdsdc)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CdsdcResolver extends CdsdcResolverBase {
  constructor(
    protected readonly service: CdsdcService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
