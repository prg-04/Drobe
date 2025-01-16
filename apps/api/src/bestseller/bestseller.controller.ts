import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BestsellerService } from './bestseller.service';
import { CreateBestsellerDto } from './dto/create-bestseller.dto';
import { UpdateBestsellerDto } from './dto/update-bestseller.dto';

@Controller('bestseller')
export class BestsellerController {
  constructor(private readonly bestsellerService: BestsellerService) {}

  @Post()
  create(@Body() createBestsellerDto: CreateBestsellerDto) {
    return this.bestsellerService.create(createBestsellerDto);
  }

  @Get()
  findAll() {
    return this.bestsellerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bestsellerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBestsellerDto: UpdateBestsellerDto) {
    return this.bestsellerService.update(+id, updateBestsellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bestsellerService.remove(+id);
  }
}
