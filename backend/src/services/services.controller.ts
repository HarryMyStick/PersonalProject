import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './models/dto/create-service.dto';
import { Service } from './models/entities/service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('createService')
  createService(@Body() createServiceDto: CreateServiceDto): Promise<Service> {
    return this.servicesService.createService(createServiceDto);
  }

  @Get('getAllServices')
  getAllServices(): Promise<Service[]> {
    return this.servicesService.getAllServices();
  }

  @Put('updateService')
  updateService(@Body() createServiceDto: CreateServiceDto): Promise<Service> {
    return this.servicesService.updateService(createServiceDto);
  }

  @Delete('deleteService:id')
  deleteService(@Param('service_id') service_id: string): Promise<void> {
    return this.servicesService.deleteService(service_id);
  }
}
