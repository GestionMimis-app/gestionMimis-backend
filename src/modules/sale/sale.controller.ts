
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateSaleDto } from './dto/create-sale.dto';
import { SaleService } from './sale.service';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('sale')
export class SaleController {
  constructor(
    private readonly saleService: SaleService
  ) { }

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(id, updateSaleDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(id);
  }
}