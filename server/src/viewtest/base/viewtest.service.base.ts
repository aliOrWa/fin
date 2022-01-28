import { PrismaService } from "nestjs-prisma";
import { Prisma, Viewtest } from "@prisma/client";

export class ViewtestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ViewtestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewtestFindManyArgs>
  ): Promise<number> {
    return this.prisma.viewtest.count(args);
  }

  async findMany<T extends Prisma.ViewtestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewtestFindManyArgs>
  ): Promise<Viewtest[]> {
    return this.prisma.viewtest.findMany(args);
  }
  async findOne<T extends Prisma.ViewtestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewtestFindUniqueArgs>
  ): Promise<Viewtest | null> {
    return this.prisma.viewtest.findUnique(args);
  }
}
