import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
//usa-se oneTomany para fazer os relacionamentos 1orfanato : varias imagens
@Entity('users') //api decorator que conecta a classe com a tabela ORM 
export default class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

}