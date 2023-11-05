import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminUserConfigurator } from '../adminjs/modules/admin-users/services/admin-user-configurator.service';
import { adminUsersConfig } from './admin-users.config';
import { AdminUserEntity } from './persistence/admin-user.entity';
import { AdminUserEntitySubscriber } from './persistence/admin-user-entity.subscriber';
import { TypeOrmAdminUserRepository } from './persistence/typeorm-admin-user.repository';
import { AdminUserAuthenticator } from './services/admin-user-authenticator.service';
import { AdminUserFinder } from './services/admin-user-finder.service';

const { repositoryInterface } = adminUsersConfig.repository;

@Module({
	exports: [AdminUserAuthenticator, AdminUserConfigurator, AdminUserFinder, TypeOrmModule],
	imports: [TypeOrmModule.forFeature([AdminUserEntity])],
	providers: [
		AdminUserAuthenticator,
		AdminUserConfigurator,
		AdminUserEntitySubscriber,
		AdminUserFinder,
		{ provide: repositoryInterface, useClass: TypeOrmAdminUserRepository },
	],
})
export class AdminUsersModule {}
