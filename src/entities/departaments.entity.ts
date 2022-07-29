import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Employee from "./employee.entity";

@Entity("departaments")
class Departaments {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  name: string;
  @OneToMany(() => Employee, (employee) => employee.departament)
  employees: Employee[];
}

export default Departaments;
