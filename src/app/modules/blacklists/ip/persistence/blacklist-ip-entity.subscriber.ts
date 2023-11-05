import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm';

import { LoggerFactory } from '../../../shared/services/logger-factory.service';
import { EntitySubscriberListenTo } from '../../../shared/types/entity-subscriber-listen-to.type';
import { blacklistsConfig } from '../../blacklists.config';
import { BlacklistIPEntity } from './blacklist-ip.entity';

const { entitySubscriber } = blacklistsConfig.ip;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;
const { className } = entitySubscriber.constants;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class BlacklistIPEntitySubscriber implements EntitySubscriberInterface<BlacklistIPEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return BlacklistIPEntity;
	}

	afterInsert(event: InsertEvent<BlacklistIPEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<BlacklistIPEntity>): void {
		const entity = event.entity as BlacklistIPEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<BlacklistIPEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
