import { Module } from "@nestjs/common";
import { BbbazdModuleBase } from "./base/bbbazd.module.base";
import { BbbazdService } from "./bbbazd.service";
import { BbbazdController } from "./bbbazd.controller";
import { BbbazdResolver } from "./bbbazd.resolver";

@Module({
  imports: [BbbazdModuleBase],
  controllers: [BbbazdController],
  providers: [BbbazdService, BbbazdResolver],
  exports: [BbbazdService],
})
export class BbbazdModule {}
