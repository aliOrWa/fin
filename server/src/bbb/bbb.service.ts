import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BbbServiceBase } from "./base/bbb.service.base";

@Injectable()
export class BbbService extends BbbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
