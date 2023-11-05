import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, DeepPartial, DeleteResult, FindOneOptions, Repository } from 'typeorm';

import { GenericEntityClassOrSchema } from '../types/generic-entity-class-or-schema.type';

export abstract class TypeOrmRepository<T> {
	constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

	protected abstract entitySchema(): GenericEntityClassOrSchema<T>;

	protected async persistEntity(data: T, dto?: DeepPartial<T>): Promise<T> {
		const repository = this.repository();

		if (dto) {
			return this.updateEntity(data, dto);
		}

		return repository.save(data);
	}

	protected async findOneEntity(where: FindOneOptions<T>): Promise<T> {
		const repository = this.repository();

		return repository.findOne(where);
	}

	protected async deleteEntity(id: string): Promise<DeleteResult> {
		const repository = this.repository();

		return repository.delete(id);
	}

	private async updateEntity(data: T, dto: DeepPartial<T>): Promise<T> {
		const repository = this.repository();

		const updatedEntity = repository.merge(data, dto);

		return repository.save(updatedEntity);
	}

	private repository(): Repository<T> {
		return this.dataSource.getRepository(this.entitySchema());
	}
}
