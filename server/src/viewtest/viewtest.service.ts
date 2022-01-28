import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ViewtestServiceBase } from "./base/viewtest.service.base";

@Injectable()
export class ViewtestService extends ViewtestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
