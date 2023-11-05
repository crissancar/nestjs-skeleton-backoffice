import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlacklistIPEntity } from './ip/persistence/blacklist-ip.entity';
import { BlacklistIPEntitySubscriber } from './ip/persistence/blacklist-ip-entity.subscriber';
import { BlacklistUserEntity } from './user/persistence/blacklist-user.entity';
import { BlacklistUserEntitySubscriber } from './user/persistence/blacklist-user-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([BlacklistIPEntity, BlacklistUserEntity])],
	providers: [BlacklistIPEntitySubscriber, BlacklistUserEntitySubscriber],
})
export class BlacklistsModule {}
