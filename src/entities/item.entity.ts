import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  qty: number;
}
