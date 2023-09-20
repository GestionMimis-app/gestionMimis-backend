import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { AnyObject, Model } from 'mongoose';

import { CreateMovementDto, UpdateMovementDto } from './dto';
import { Movement } from './entities/movement.entity';

@Injectable()
export class MovementService {
  constructor(
    @InjectModel(Movement.name)
    private movementModel: Model<Movement>,
  ) { }

  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    try {

      const movement = new this.movementModel(createMovementDto)

      await movement.save()

      return movement;
    } catch (error) {
      console.log({ error });

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Movement[]> {
    try {
      const movements = await this.movementModel.find();

      if (movements) {
        return movements;
      }

      return [];
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Movement> {
    try {
      const movement = await this.movementModel.findOne({ _id: id });

      return movement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateMovementDto: UpdateMovementDto): Promise<Movement> {
    try {

      const updatedMovement = await this.movementModel.findByIdAndUpdate(id, updateMovementDto)

      return updatedMovement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  remove(id: string): Promise<AnyObject> {
    try {
      return this.movementModel.deleteOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
