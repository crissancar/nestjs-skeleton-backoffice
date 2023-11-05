import { FindOneOptions } from 'typeorm';

import { TypeOrmRepository } from '../../shared/persistence/typeorm.repository';
import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { GenericEntityClassOrSchema } from '../../shared/types/generic-entity-class-or-schema.type';
import { Nullable } from '../../shared/types/nullable.type';
import { adminUsersConfig } from '../admin-users.config';
import { AdminUserRepository } from '../repositories/admin-user.repository';
import { AdminUserEntity } from './admin-user.entity';

const { typeOrmRepository } = adminUsersConfig;
const { className } = typeOrmRepository.constants;
const { findByEmailRequestLog } = typeOrmRepository.logs;

const logger = LoggerFactory.create(className);

export class TypeOrmAdminUserRepository
	extends TypeOrmRepository<AdminUserEntity>
	implements AdminUserRepository
{
	async findByEmail(email: string): Promise<Nullable<AdminUserEntity>> {
		logger.log(findByEmailRequestLog(email));

		const options = { where: { email } } as FindOneOptions<AdminUserEntity>;

		return this.findOneEntity(options);
	}

	protected entitySchema(): GenericEntityClassOrSchema<AdminUserEntity> {
		return AdminUserEntity;
	}
}
