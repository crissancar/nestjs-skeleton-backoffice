import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm';

import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { Uuid } from '../../shared/services/uuid.service';
import { EntitySubscriberListenTo } from '../../shared/types/entity-subscriber-listen-to.type';
import { usersConfig } from '../users.config';
import { UserEntity } from './user.entity';

const { entitySubscriber } = usersConfig;
const { className } = entitySubscriber.constants;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class UserEntitySubscriber implements EntitySubscriberInterface<UserEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return UserEntity;
	}

	beforeInsert(event: InsertEvent<UserEntity>): void {
		const { entity } = event;

		entity.id = Uuid.random();
	}

	afterInsert(event: InsertEvent<UserEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<UserEntity>): void {
		const entity = event.entity as UserEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<UserEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
