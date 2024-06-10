import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  service_id: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
