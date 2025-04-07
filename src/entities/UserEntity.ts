import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: "users"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user!: string;

    @Column()
    pass!: string;
}
