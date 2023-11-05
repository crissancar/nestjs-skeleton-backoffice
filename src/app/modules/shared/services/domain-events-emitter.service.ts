import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { EmmitEventRequest } from '../dtos/emmit-event-request.dto';

@Injectable()
export class DomainEventsEmitter<T> {
	constructor(private readonly emitter: EventEmitter2) {}

	run(request: EmmitEventRequest<T>): void {
		const { event, entity } = request;

		this.emitter.emit(event, entity);
	}
}
