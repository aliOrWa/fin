import { PrismaService } from "nestjs-prisma";
import { Prisma, Bbb } from "@prisma/client";

export class BbbServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BbbFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbFindManyArgs>
  ): Promise<number> {
    return this.prisma.bbb.count(args);
  }

  async findMany<T extends Prisma.BbbFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbFindManyArgs>
  ): Promise<Bbb[]> {
    return this.prisma.bbb.findMany(args);
  }
  async findOne<T extends Prisma.BbbFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BbbFindUniqueArgs>
  ): Promise<Bbb | null> {
    return this.prisma.bbb.findUnique(args);
  }
}
