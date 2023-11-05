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
import { examplesConfig } from '../config/examples.config';
import { ExampleEntity } from './example.entity';

const { entitySubscriber } = examplesConfig;
const { className } = entitySubscriber.constants;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class ExampleEntitySubscriber implements EntitySubscriberInterface<ExampleEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return ExampleEntity;
	}

	beforeInsert(event: InsertEvent<ExampleEntity>): void {
		const { entity } = event;

		entity.id = Uuid.random();
	}

	afterInsert(event: InsertEvent<ExampleEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<ExampleEntity>): void {
		const entity = event.entity as ExampleEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<ExampleEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
