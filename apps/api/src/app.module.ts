import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BestsellerModule } from './bestseller/bestseller.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), UserModule, BestsellerModule, ShopModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,],
})
export class AppModule {}
