import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentityModule } from './identity/identity.module';

@Module({
  imports: [TypeOrmModule.forRoot(),IdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
