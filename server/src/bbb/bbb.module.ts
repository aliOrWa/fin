import { Module } from "@nestjs/common";
import { BbbModuleBase } from "./base/bbb.module.base";
import { BbbService } from "./bbb.service";
import { BbbController } from "./bbb.controller";
import { BbbResolver } from "./bbb.resolver";

@Module({
  imports: [BbbModuleBase],
  controllers: [BbbController],
  providers: [BbbService, BbbResolver],
  exports: [BbbService],
})
export class BbbModule {}
