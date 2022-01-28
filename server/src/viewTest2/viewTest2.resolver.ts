import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ViewTest2ResolverBase } from "./base/viewTest2.resolver.base";
import { ViewTest2 } from "./base/ViewTest2";
import { ViewTest2Service } from "./viewTest2.service";

@graphql.Resolver(() => ViewTest2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ViewTest2Resolver extends ViewTest2ResolverBase {
  constructor(
    protected readonly service: ViewTest2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
