import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';

import { Movement, MovementSchema } from './entities/movement.entity';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';

@Module({
  controllers: [MovementController],
  providers: [MovementService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Movement.name,
        schema: MovementSchema
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
export class MovementModule {}
