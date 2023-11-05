import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm';

import { Bcrypt } from '../../shared/services/bcrypt.service';
import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { EntitySubscriberListenTo } from '../../shared/types/entity-subscriber-listen-to.type';
import { adminUsersConfig } from '../admin-users.config';
import { AdminUserEntity } from './admin-user.entity';

const { entitySubscriber } = adminUsersConfig;
const { className } = entitySubscriber.constants;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class AdminUserEntitySubscriber implements EntitySubscriberInterface<AdminUserEntity> {
	constructor(private readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return AdminUserEntity;
	}

	beforeInsert(event: InsertEvent<AdminUserEntity>): void {
		const { entity } = event;

		entity.password = Bcrypt.hash(entity.password);
	}

	beforeUpdate(event: UpdateEvent<AdminUserEntity>): void {
		const { databaseEntity } = event;
		const entity = event.entity as AdminUserEntity;

		if (this.isNewPassword(entity.password, databaseEntity.password)) {
			entity.password = Bcrypt.hash(entity.password);
		} else {
			entity.password = databaseEntity.password;
		}
	}

	afterInsert(event: InsertEvent<AdminUserEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<AdminUserEntity>): void {
		const entity = event.entity as AdminUserEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<AdminUserEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}

	isNewPassword(password: string, hashedPassword: string): boolean {
		return !AdminUserEntity.comparePasswords(password, hashedPassword);
	}
}
