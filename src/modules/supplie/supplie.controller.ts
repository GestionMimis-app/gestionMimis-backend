import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { SupplieService } from './supplie.service';
import { CreateSupplieDto } from './dto/create-supplie.dto';
import { UpdateSupplieDto } from './dto/update-supplie.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('supplie')
export class SupplieController {
  constructor(private readonly supplieService: SupplieService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createSupplieDto: CreateSupplieDto) {
    return this.supplieService.create(createSupplieDto);
  }

  @Get()
  findAll() {
    return this.supplieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplieService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplieDto: UpdateSupplieDto) {
    return this.supplieService.update(id, updateSupplieDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplieService.remove(id);
  }
}
