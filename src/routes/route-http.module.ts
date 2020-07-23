import { Module } from '@nestjs/common';
import { RoutesModule } from './route.module';
import { RoutesService } from './Routes.service';
import { RouteController } from './Routes.controller';

@Module({
  imports: [
    RoutesModule
  ],
  providers: [RoutesService],
  controllers: [RouteController],
  exports: [RoutesService]
})
export class RouteHttpModule {}
