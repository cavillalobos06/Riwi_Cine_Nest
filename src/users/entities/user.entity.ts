import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "role", type: "int" })
  roleId: number;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: "boolean", default: false })
  isActive: boolean;

  @Column({ type: "date" })
  activatedAt: Date | null;

  @Column({ type: "date" })
  emailVerificatedAt: Date | null;
}
