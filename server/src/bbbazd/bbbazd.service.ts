import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BbbazdServiceBase } from "./base/bbbazd.service.base";

@Injectable()
export class BbbazdService extends BbbazdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
