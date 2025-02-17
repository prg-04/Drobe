import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('ladies')
  async getLadiesProd() {
    try {
      const products = await this.shopService.ladiesProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/men')
  async getMenProd() {
    try {
      const products = await this.shopService.menProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/kids')
  async getKidsProd() {
    try {
      const products = await this.shopService.kidsProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/ladies_wear')
  async getLadiesAccessories() {
    try {
      const products = await this.shopService.extraLadiesProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/baby')
  async getBabyProd() {
    try {
      const products = await this.shopService.babyProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/home')
  async getHomeProd() {
    try {
      const products = await this.shopService.homeProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/beauty')
  async getBeautyProd() {
    try {
      const products = await this.shopService.beautyProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/sport')
  async getSportProd() {
    try {
      const products = await this.shopService.sportsProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  @Get('/outlet')
  async getOutletProd() {
    try {
      const products = await this.shopService.outletProd(); // Call the function with ()
      return products;
    } catch (error) {
      // Handle the error appropriately, e.g.,
      console.error(error);
      // Perhaps return an error response:
      // throw new InternalServerErrorException('Failed to fetch ladies products');
      return { error: 'Failed to fetch ladies products' }; // Or a simpler error object
    }
  }

  // @Post()
  // create(@Body() createShopDto: CreateShopDto) {
  //   return this.shopService.create(createShopDto);
  // }

  // @Get()
  // findAll() {
  //   return this.shopService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.shopService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
  //   return this.shopService.update(+id, updateShopDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shopService.remove(+id);
  // }
}
