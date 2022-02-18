import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
  } from "typeorm";
  
  export class CreateProducts1643758774622 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "produtos",
          columns: [
            {
              name: "id",
              type: "int",
              isGenerated: true,
              isPrimary: true,
              generationStrategy: "increment",
            },
            {
              name: "nome",
              type: "varchar",
              length: "255",
              isNullable: false,
            },
            {
              name: "categoria_id",
              type: "int",
              isNullable: true,
            },
            {
              name: "quantidade",
              type: "int",
              isNullable: false,
            },
            {
              name: "preco",
              type: "float",
              precision: 10,
              scale: 2,
              isNullable: false,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()",
            },
          ],
        })
      );
  
      await queryRunner.createForeignKey(
        "produtos",
        new TableForeignKey({
          columnNames: ["categoria_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "categorias",
          onDelete: "SET NULL",
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("produtos");
    }
  }
  