import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Departaments from "./departaments.entity";

@Entity("employee")
class Employee {
  @PrimaryGeneratedColumn()
  code: number;
  @Column({
    length: 100,
  })
  name: string;
  @Column()
  dependents_qtd: number;
  @Column({
    length: 100,
  })
  role: string;
  @Column()
  salary: number;
  @ManyToOne(() => Departaments, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({
    name: "departament_id",
  })
  departament: Departaments;
}

export default Employee;
