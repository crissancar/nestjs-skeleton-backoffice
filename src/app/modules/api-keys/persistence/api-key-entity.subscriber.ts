import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm';

import { Crypto } from '../../shared/services/crypto.service';
import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { EntitySubscriberListenTo } from '../../shared/types/entity-subscriber-listen-to.type';
import { apiKeysConfig } from '../api-keys.config';
import { ApiKeyGenerator } from '../services/api-key-generator.service';
import { ApiKeyEntity } from './api-key.entity';

const { entitySubscriber } = apiKeysConfig;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;
const { className } = entitySubscriber.constants;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class ApiKeyEntitySubscriber implements EntitySubscriberInterface<ApiKeyEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return ApiKeyEntity;
	}

	afterLoad(entity: ApiKeyEntity): void {
		const cipheredKey = entity.key;

		entity.key = Crypto.decipher(cipheredKey);
	}

	beforeInsert(event: InsertEvent<ApiKeyEntity>): void {
		const { entity } = event;

		const plainKey = ApiKeyGenerator.run();

		entity.key = Crypto.cipher(plainKey);
	}

	afterInsert(event: InsertEvent<ApiKeyEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<ApiKeyEntity>): void {
		const entity = event.entity as ApiKeyEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<ApiKeyEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
