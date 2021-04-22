import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ItemsController } from './items.controller';
import { itemsProviders } from './items.providers';
import { ItemsService } from './items.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders],
})
export class ItemsModule {}
