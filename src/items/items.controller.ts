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

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return `This returns all strings`;
  }

  @Post(':id')
  create(@Body() createItem: CreateItemsDto): string {
    return `Added new item ${createItem.name} - ${createItem.description}`;
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
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
