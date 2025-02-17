import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  async ladiesProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Ladies',
        },
      });
      return products;
    } catch (error) {
      console.error('Error fetching ladies products:', error);
      throw error;
    }
  }

  async menProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Men',
        },
      });

      return products;
    } catch (err) {
      console.log(err);
    }
  }

  async extraLadiesProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'divided',
        },
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async babyProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Baby',
        },
      });
      return products
    } catch (error) {
      console.log(error);
    }
  }

  async kidsProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Kids',
        },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async homeProd() {
    return this.prisma.products.findMany({
      where: {
        categoryName: 'Home',
      },
    });
  }

  async beautyProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Beauty',
        },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async sportsProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Sport',
        },
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async outletProd() {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryName: 'Outlet',
        },
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }

  // create(createShopDto: CreateShopDto) {
  //   return 'This action adds a new shop';
  // }

  // findAll() {
  //   return `This action returns all shop`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} shop`;
  // }

  // update(id: number, updateShopDto: UpdateShopDto) {
  //   return `This action updates a #${id} shop`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} shop`;
  // }
}
