import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BbbazdService } from "./bbbazd.service";
import { BbbazdControllerBase } from "./base/bbbazd.controller.base";

@swagger.ApiTags("bbbazds")
@common.Controller("bbbazds")
export class BbbazdController extends BbbazdControllerBase {
  constructor(
    protected readonly service: BbbazdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
