import { IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  service_id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
