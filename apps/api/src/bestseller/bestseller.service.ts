import { Injectable } from '@nestjs/common';
import { CreateBestsellerDto } from './dto/create-bestseller.dto';
import { UpdateBestsellerDto } from './dto/update-bestseller.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BestsellerService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBestsellerDto: CreateBestsellerDto) {
    return 'This action adds a new bestseller';
  }

  async findAll() {
    const randomProducts = await this.prisma.products.findMany({
      take: 8,
      orderBy: [
        {
          id: 'asc',
        },
      ],
    });
    return randomProducts;
  }

  findOne(id: number) {
    return `This action returns a #${id} bestseller`;
  }

  update(id: number, updateBestsellerDto: UpdateBestsellerDto) {
    return `This action updates a #${id} bestseller`;
  }

  remove(id: number) {
    return `This action removes a #${id} bestseller`;
  }
}
