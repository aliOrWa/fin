import { Module } from "@nestjs/common";
import { ViewTest2ModuleBase } from "./base/viewTest2.module.base";
import { ViewTest2Service } from "./viewTest2.service";
import { ViewTest2Controller } from "./viewTest2.controller";
import { ViewTest2Resolver } from "./viewTest2.resolver";

@Module({
  imports: [ViewTest2ModuleBase],
  controllers: [ViewTest2Controller],
  providers: [ViewTest2Service, ViewTest2Resolver],
  exports: [ViewTest2Service],
})
export class ViewTest2Module {}
