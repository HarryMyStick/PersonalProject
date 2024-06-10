import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './models/entities/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './models/dto/create-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private servicesRepository: Repository<Service>,
  ) {}

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const { title } = createServiceDto;

    const existingService = await this.servicesRepository.findOne({
      where: [{ title }],
    });

    if (existingService) {
      throw new ConflictException(
        'A service with the same title already exists.',
      );
    }

    const service = this.servicesRepository.create(createServiceDto);
    await service.save();
    return service;
  }

  async updateService(createServiceDto: CreateServiceDto): Promise<Service> {
    const { service_id } = createServiceDto;
    const service = await this.servicesRepository.findOne({
      where: [{ service_id }],
    });

    if (!service) {
      throw new NotFoundException('Service not found.');
    }

    Object.assign(service, CreateServiceDto);

    await this.servicesRepository.save(service);
    return service;
  }

  async deleteService(service_id: string): Promise<void> {
    const service = await this.servicesRepository.findOne({
      where: [{ service_id }],
    });

    if (!service) {
      throw new NotFoundException('Service not found.');
    }
    await this.servicesRepository.remove(service);
  }

  async getAllServices(): Promise<Service[]> {
    return this.servicesRepository.find();
  }
}
