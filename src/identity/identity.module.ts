import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentityEntity } from './identity.entity';
import { PictureEntity } from 'src/Picture/picture.entity';
import { LicenseEntity } from 'src/license/license.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IdentityEntity,PictureEntity,LicenseEntity])],
  providers: [IdentityService],
  controllers: [IdentityController]
})
export class IdentityModule {}
