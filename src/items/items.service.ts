import { Inject, Injectable } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { Item as ItemInterface } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY') private itemsRepository: typeof Item,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.findAll<Item>();
  }

  findOne(id: number): Promise<Item> {
    return this.itemsRepository.findOne<Item>({
      where: { id: id },
    });
  }

  create(item: ItemInterface): Promise<Item> {
    console.log(item);
    return this.itemsRepository.create<Item>(item);
  }

  destroy(id: number): Promise<number> {
    return this.itemsRepository.destroy<Item>({
      where: { id: id },
    });
  }

  update(item: ItemInterface, id: number): Promise<[number, Item[]]> {
    return this.itemsRepository.update<Item>(item, {
      where: { id: id },
    });
  }
}
