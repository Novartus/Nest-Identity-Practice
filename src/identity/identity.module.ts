import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentityEntity } from './identity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IdentityEntity])],
  providers: [IdentityService],
  controllers: [IdentityController]
})
export class IdentityModule {}
