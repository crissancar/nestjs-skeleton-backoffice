import { IsInstance, IsString } from 'class-validator';
import { BaseEntity } from 'typeorm';

export class EmmitEventRequest<T> {
	@IsString()
	readonly event: string;

	@IsInstance(BaseEntity)
	readonly entity: T;

	constructor(event: string, entity: T) {
		this.event = event;
		this.entity = entity;
	}

	static create<T>(event: string, entity: T): EmmitEventRequest<T> {
		return new EmmitEventRequest(event, entity);
	}
}
