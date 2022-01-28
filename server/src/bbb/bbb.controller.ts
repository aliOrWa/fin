import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BbbService } from "./bbb.service";
import { BbbControllerBase } from "./base/bbb.controller.base";

@swagger.ApiTags("bbbs")
@common.Controller("bbbs")
export class BbbController extends BbbControllerBase {
  constructor(
    protected readonly service: BbbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
