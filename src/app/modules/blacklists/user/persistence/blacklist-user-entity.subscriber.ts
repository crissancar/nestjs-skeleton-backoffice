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
import { BlacklistUserEntity } from './blacklist-user.entity';

const { entitySubscriber } = blacklistsConfig.user;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;
const { className } = entitySubscriber.constants;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class BlacklistUserEntitySubscriber
	implements EntitySubscriberInterface<BlacklistUserEntity>
{
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return BlacklistUserEntity;
	}

	afterInsert(event: InsertEvent<BlacklistUserEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<BlacklistUserEntity>): void {
		const entity = event.entity as BlacklistUserEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<BlacklistUserEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
