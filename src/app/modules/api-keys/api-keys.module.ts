import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiKeyEntity } from './persistence/api-key.entity';
import { ApiKeyEntitySubscriber } from './persistence/api-key-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([ApiKeyEntity])],
	providers: [ApiKeyEntitySubscriber],
})
export class ApiKeysModule {}
