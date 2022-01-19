import { Module } from "@nestjs/common";
import { CdsdcModuleBase } from "./base/cdsdc.module.base";
import { CdsdcService } from "./cdsdc.service";
import { CdsdcController } from "./cdsdc.controller";
import { CdsdcResolver } from "./cdsdc.resolver";

@Module({
  imports: [CdsdcModuleBase],
  controllers: [CdsdcController],
  providers: [CdsdcService, CdsdcResolver],
  exports: [CdsdcService],
})
export class CdsdcModule {}
