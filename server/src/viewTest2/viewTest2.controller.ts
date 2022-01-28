import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ViewTest2Service } from "./viewTest2.service";
import { ViewTest2ControllerBase } from "./base/viewTest2.controller.base";

@swagger.ApiTags("view-test2s")
@common.Controller("view-test2s")
export class ViewTest2Controller extends ViewTest2ControllerBase {
  constructor(
    protected readonly service: ViewTest2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
