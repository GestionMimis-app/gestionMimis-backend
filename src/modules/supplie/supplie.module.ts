import { Module } from '@nestjs/common';
import { SupplieService } from './supplie.service';
import { SupplieController } from './supplie.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplie, SupplieSchema } from './entities/supplie.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [SupplieController],
  providers: [SupplieService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Supplie.name,
        schema: SupplieSchema
      }
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '24h' }
    }),
    AuthModule
  ]
})
export class SupplieModule {}
