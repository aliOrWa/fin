import { PrismaService } from "nestjs-prisma";
import { Prisma, ViewTest2 } from "@prisma/client";

export class ViewTest2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ViewTest2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewTest2FindManyArgs>
  ): Promise<number> {
    return this.prisma.viewTest2.count(args);
  }

  async findMany<T extends Prisma.ViewTest2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewTest2FindManyArgs>
  ): Promise<ViewTest2[]> {
    return this.prisma.viewTest2.findMany(args);
  }
  async findOne<T extends Prisma.ViewTest2FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViewTest2FindUniqueArgs>
  ): Promise<ViewTest2 | null> {
    return this.prisma.viewTest2.findUnique(args);
  }
}
