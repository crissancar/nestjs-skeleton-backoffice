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
import { faqsConfig } from '../faqs.config';
import { FAQEntity } from './faq.entity';

const { entitySubscriber } = faqsConfig;
const { className } = entitySubscriber.constants;
const { afterInsertLog, afterUpdateLog, afterDeleteLog } = entitySubscriber.logs;

const logger = LoggerFactory.create(className);

@EventSubscriber()
export class FAQEntitySubscriber implements EntitySubscriberInterface<FAQEntity> {
	constructor(readonly dataSource: DataSource) {
		dataSource.subscribers.push(this);
	}

	listenTo(): EntitySubscriberListenTo {
		return FAQEntity;
	}

	afterInsert(event: InsertEvent<FAQEntity>): void {
		const { entity } = event;

		logger.log(afterInsertLog(entity.id));
	}

	afterUpdate(event: UpdateEvent<FAQEntity>): void {
		const entity = event.entity as FAQEntity;

		logger.log(afterUpdateLog(entity.id));
	}

	afterRemove(event: RemoveEvent<FAQEntity>): void {
		const { databaseEntity } = event;

		logger.log(afterDeleteLog(databaseEntity.id));
	}
}
