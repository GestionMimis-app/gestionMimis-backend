import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';

import { MovementService } from './movement.service';

@Controller('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createMovementDto: CreateMovementDto) {
    return this.movementService.create(createMovementDto);
  }

  @Get()
  findAll() {
    return this.movementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movementService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovementDto: UpdateMovementDto) {
    return this.movementService.update(id, updateMovementDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movementService.remove(id);
  }
}
