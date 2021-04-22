import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post()
  create(@Body() createItem: CreateItemsDto): Promise<Item> {
    return this.itemService.create(createItem);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Put(':id')
  edit(@Body() createItem: CreateItemsDto): string {
    return `Updated item ${createItem.name} - ${createItem.description}`;
  }

  @Delete(':id')
  delete(@Param() param): string {
    return `Item ${param.id} deleted`;
  }
}
