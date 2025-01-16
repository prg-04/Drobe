import { Module } from '@nestjs/common';
import { BestsellerService } from './bestseller.service';
import { BestsellerController } from './bestseller.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BestsellerController],
  providers: [BestsellerService, PrismaService],
})
export class BestsellerModule {}
