import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('otp2')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    unique: true,
    name: 'email',
  })
  email: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    length: 4,
    type: 'varchar',
    nullable: true,
  })
  otp: string;

  @Column({
    length: 4,
    type: 'varchar',
    nullable: true,
  })
  is_verify: boolean;
}
