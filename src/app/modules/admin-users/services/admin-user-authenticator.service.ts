import { Injectable } from '@nestjs/common';

import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { Nullable } from '../../shared/types/nullable.type';
import { adminUsersConfig } from '../admin-users.config';
import { AuthenticateAdminUserRequest } from '../dtos/authenticate-admin-user-request.dto';
import { AdminUserEntity } from '../persistence/admin-user.entity';
import { AdminUserFinder } from './admin-user-finder.service';

const { authenticator } = adminUsersConfig;
const { className } = authenticator.constants;
const { requestLog, responseLog, adminUserNotExistsLog, invalidCredentialsLog } =
	authenticator.logs;

const logger = LoggerFactory.create(className);

@Injectable()
export class AdminUserAuthenticator {
	constructor(private readonly finder: AdminUserFinder) {}

	async run(request: AuthenticateAdminUserRequest): Promise<Nullable<AdminUserEntity>> {
		logger.log(requestLog);

		const { email, password } = request;

		const user = await this.finder.run({ email });

		if (!user) {
			logger.error(adminUserNotExistsLog);

			return null;
		}

		if (!AdminUserEntity.comparePasswords(password, user.password)) {
			logger.error(invalidCredentialsLog);

			return null;
		}

		logger.log(responseLog);

		return user;
	}
}
