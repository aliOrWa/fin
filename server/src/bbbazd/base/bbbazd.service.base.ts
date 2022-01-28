import { PrismaService } from "nestjs-prisma";
import { Prisma, Bbbazd } from "@prisma/client";

export class BbbazdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BbbazdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbazdFindManyArgs>
  ): Promise<number> {
    return this.prisma.bbbazd.count(args);
  }

  async findMany<T extends Prisma.BbbazdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbazdFindManyArgs>
  ): Promise<Bbbazd[]> {
    return this.prisma.bbbazd.findMany(args);
  }
  async findOne<T extends Prisma.BbbazdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbazdFindUniqueArgs>
  ): Promise<Bbbazd | null> {
    return this.prisma.bbbazd.findUnique(args);
  }
}
