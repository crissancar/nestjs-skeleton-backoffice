import { Inject, Injectable } from '@nestjs/common';

import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { Nullable } from '../../shared/types/nullable.type';
import { adminUsersConfig } from '../admin-users.config';
import { FindAdminUserRequest } from '../dtos/find-admin-user-request.dto';
import { AdminUserEntity } from '../persistence/admin-user.entity';
import { AdminUserRepository } from '../repositories/admin-user.repository';

const { finder, repository } = adminUsersConfig;
const { repositoryInterface } = repository;
const { className } = finder.constants;
const { requestLog } = finder.logs;

const logger = LoggerFactory.create(className);

@Injectable()
export class AdminUserFinder {
	constructor(@Inject(repositoryInterface) private readonly repository: AdminUserRepository) {}

	async run(request: FindAdminUserRequest): Promise<Nullable<AdminUserEntity>> {
		logger.log(requestLog);

		const { email } = request;

		return this.repository.findByEmail(email);
	}
}
