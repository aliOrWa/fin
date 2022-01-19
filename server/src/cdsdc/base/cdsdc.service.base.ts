import { PrismaService } from "nestjs-prisma";
import { Prisma, Cdsdc } from "@prisma/client";

export class CdsdcServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CdsdcFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcFindManyArgs>
  ): Promise<number> {
    return this.prisma.cdsdc.count(args);
  }

  async findMany<T extends Prisma.CdsdcFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcFindManyArgs>
  ): Promise<Cdsdc[]> {
    return this.prisma.cdsdc.findMany(args);
  }
  async findOne<T extends Prisma.CdsdcFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcFindUniqueArgs>
  ): Promise<Cdsdc | null> {
    return this.prisma.cdsdc.findUnique(args);
  }
  async create<T extends Prisma.CdsdcCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcCreateArgs>
  ): Promise<Cdsdc> {
    return this.prisma.cdsdc.create<T>(args);
  }
  async update<T extends Prisma.CdsdcUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcUpdateArgs>
  ): Promise<Cdsdc> {
    return this.prisma.cdsdc.update<T>(args);
  }
  async delete<T extends Prisma.CdsdcDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CdsdcDeleteArgs>
  ): Promise<Cdsdc> {
    return this.prisma.cdsdc.delete(args);
  }
}
