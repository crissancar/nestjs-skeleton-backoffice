import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm';

import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { EntitySubscriberListenTo } from '../../shared/types/entity-subscriber-listen-to.type';
import { policiesConfig } from '../policies.config';
import { PolicyEntity } from './policy.entity';

const { entitySubscriber } = policiesConfig;
const { className } = entitySubscriber.constants;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class PolicyEntitySubscriber implements EntitySubscriberInterface<PolicyEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return PolicyEntity;
	}

	afterInsert(event: InsertEvent<PolicyEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<PolicyEntity>): void {
		const entity = event.entity as PolicyEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<PolicyEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
