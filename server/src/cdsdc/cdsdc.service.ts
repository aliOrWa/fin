import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CdsdcServiceBase } from "./base/cdsdc.service.base";

@Injectable()
export class CdsdcService extends CdsdcServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
