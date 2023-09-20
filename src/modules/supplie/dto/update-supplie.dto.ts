import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplieDto } from './create-supplie.dto';

export class UpdateSupplieDto extends PartialType(CreateSupplieDto) {}
