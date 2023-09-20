import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './entities/sale.entity';
import { AnyObject, Model } from 'mongoose';
import { CreateSaleDto, UpdateSaleDto } from './dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name)
    private saleModel: Model<Sale>,
  ) { }

  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    try {

      const sale = new this.saleModel(createSaleDto)

      await sale.save()

      return sale;
    } catch (error) {
      console.log({ error });

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Sale[]> {
    try {
      const sales = await this.saleModel.find();

      if (sales) {
        return sales;
      }

      return [];
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Sale> {
    try {
      const movement = await this.saleModel.findOne({ _id: id });

      return movement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    try {

      const updatedMovement = await this.saleModel.findByIdAndUpdate(id, updateSaleDto)

      return updatedMovement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  remove(id: string): Promise<AnyObject> {
    try {
      return this.saleModel.deleteOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
