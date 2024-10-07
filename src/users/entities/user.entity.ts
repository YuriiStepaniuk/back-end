import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  age: number;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
