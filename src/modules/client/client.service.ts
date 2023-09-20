import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { AnyObject, Model } from 'mongoose';

import { CreateClientDto, UpdateClientDto } from './dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {

  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<Client>,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {

      const client = new this.clientModel(createClientDto)

      await client.save()

      return client;
    } catch (error) {
      console.log({ error });

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Client[]> {
    try {
      const clients = await this.clientModel.find();

      if (clients) {
        return clients;
      }

      return [];
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Client> {
    try {
      const client = await this.clientModel.findOne({ _id: id });

      return client;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    try {

      const updatedClient = await this.clientModel.findByIdAndUpdate(id, updateClientDto)

      return updatedClient;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  remove(id: string): Promise<AnyObject> {
    try {
      return this.clientModel.deleteOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
