import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';

import { IdentityEntity } from './identity.entity';
import { PictureEntity } from 'src/Picture/picture.entity';
import { LicenseEntity } from 'src/license/license.entity';
import { GroupEntity } from 'src/Group/group.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IdentityEntity,PictureEntity,LicenseEntity,GroupEntity])],
  providers: [IdentityService],
  controllers: [IdentityController]
})
export class IdentityModule {}
