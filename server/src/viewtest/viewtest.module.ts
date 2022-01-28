import { Module } from "@nestjs/common";
import { ViewtestModuleBase } from "./base/viewtest.module.base";
import { ViewtestService } from "./viewtest.service";
import { ViewtestController } from "./viewtest.controller";
import { ViewtestResolver } from "./viewtest.resolver";

@Module({
  imports: [ViewtestModuleBase],
  controllers: [ViewtestController],
  providers: [ViewtestService, ViewtestResolver],
  exports: [ViewtestService],
})
export class ViewtestModule {}
