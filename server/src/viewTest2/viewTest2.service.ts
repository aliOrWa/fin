import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ViewTest2ServiceBase } from "./base/viewTest2.service.base";

@Injectable()
export class ViewTest2Service extends ViewTest2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
