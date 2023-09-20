import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { AnyObject, Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from './dto';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {

      const product = new this.productModel(createProductDto)

      await product.save()

      return product;
    } catch (error) {
      console.log({ error });

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.productModel.find();

      if (products) {
        return products;
      }

      return [];
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Product> {
    try {
      const movement = await this.productModel.findOne({ _id: id });

      return movement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    try {

      const updatedMovement = await this.productModel.findByIdAndUpdate(id, updateProductDto)

      return updatedMovement;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  remove(id: string): Promise<AnyObject> {
    try {
      return this.productModel.deleteOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
