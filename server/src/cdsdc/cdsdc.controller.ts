import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CdsdcService } from "./cdsdc.service";
import { CdsdcControllerBase } from "./base/cdsdc.controller.base";

@swagger.ApiTags("cdsdcs")
@common.Controller("cdsdcs")
export class CdsdcController extends CdsdcControllerBase {
  constructor(
    protected readonly service: CdsdcService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
