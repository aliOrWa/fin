import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ViewtestService } from "./viewtest.service";
import { ViewtestControllerBase } from "./base/viewtest.controller.base";

@swagger.ApiTags("viewtests")
@common.Controller("viewtests")
export class ViewtestController extends ViewtestControllerBase {
  constructor(
    protected readonly service: ViewtestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
