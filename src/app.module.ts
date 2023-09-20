import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { MovementModule } from './modules/movement/movement.module';
import { ProductModule } from './modules/product/product.module';
import { SaleModule } from './modules/sale/sale.module';
import { SupplieModule } from './modules/supplie/supplie.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UserModule,
    MovementModule,
    SupplieModule,
    SaleModule,
    ClientModule,
    ProductModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
