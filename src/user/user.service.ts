import { Inject, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaClient;

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
