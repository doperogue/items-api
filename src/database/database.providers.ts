import { Sequelize } from 'sequelize-typescript';
import { Item } from '../entities/item.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'items_DB',
      });
      sequelize.addModels([Item]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
