import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './persistence/user.entity';
import { UserEntitySubscriber } from './persistence/user-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	providers: [UserEntitySubscriber],
})
export class UsersModule {}
