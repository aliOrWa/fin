import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ViewtestResolverBase } from "./base/viewtest.resolver.base";
import { Viewtest } from "./base/Viewtest";
import { ViewtestService } from "./viewtest.service";

@graphql.Resolver(() => Viewtest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ViewtestResolver extends ViewtestResolverBase {
  constructor(
    protected readonly service: ViewtestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
