import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1619709290152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar alteraçoes
        //Criar tabela, novo campo, deletar
        await queryRunner.createTable(new Table({
          name: 'users',
          columns: [
            {
              name:'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type:'varchar'
            },
            {
              name:'username',
              type:'varchar'
            },
            {
              name:'email',
              type:'varchar'
            },
            {
              name:'password',
              type:'varchar'
            }
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Desfazer oque foi feito em up
      await queryRunner.dropTable("users")
    }

}
