import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supplie } from './entities/supplie.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AnyObject, Model } from 'mongoose';
import { CreateSupplieDto, UpdateSupplieDto } from './dto';

@Injectable()
export class SupplieService {
  constructor(
    @InjectModel(Supplie.name)
    private supplieModel: Model<Supplie>,
  ) { }

  async create(createSupplieDto: CreateSupplieDto): Promise<Supplie> {
    try {

      const supplie = new this.supplieModel(createSupplieDto)

      await supplie.save()

      return supplie;
    } catch (error) {
      console.log({ error });

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Supplie[]> {
    try {
      const products = await this.supplieModel.find();

      if (products) {
        return products;
      }

      return [];
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Supplie> {
    try {
      const supplie = await this.supplieModel.findOne({ _id: id });

      return supplie;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateSupplieDto: UpdateSupplieDto): Promise<Supplie> {
    try {

      const updatedSupplie = await this.supplieModel.findByIdAndUpdate(id, updateSupplieDto)

      return updatedSupplie;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  remove(id: string): Promise<AnyObject> {
    try {
      return this.supplieModel.deleteOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
