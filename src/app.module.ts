import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
// import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
// import { ItemsService } from './items/items.service';

@Module({
  imports: [DatabaseModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
