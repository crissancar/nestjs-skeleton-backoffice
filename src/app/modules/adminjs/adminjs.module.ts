// eslint-disable-next-line no-use-before-define

import { AdminModule, AdminModuleOptions } from '@adminjs/nestjs';
import * as AdminJSTypeOrm from '@adminjs/typeorm';
import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';

import { AdminUsersModule } from '../admin-users/admin-users.module';
import { AdminUserAuthenticator } from '../admin-users/services/admin-user-authenticator.service';
import { ApiKeysModule } from '../api-keys/api-keys.module';
import { BlacklistsModule } from '../blacklists/blacklists.module';
import { FAQsModule } from '../faqs/faqs.module';
import { PoliciesModule } from '../policies/policies.module';
import { UsersModule } from '../users/users.module';
import { AdminJSLoader } from './config/app/adminjs-loader.service';
import { AdminJSOptionsConfigurator } from './config/app/adminjs-options-configurator.service';
import { AdminJSResourcesConfigurator } from './config/app/adminjs-resources-configurator.service';
import { ApiKeyConfigurator } from './modules/api-keys/services/api-key-configurator.service';
import { BlacklistIPConfigurator } from './modules/blacklists/ip/services/blacklist-ip-configurator.service';
import { BlacklistUserConfigurator } from './modules/blacklists/user/services/blacklist-user-configurator.service';
import { FAQConfigurator } from './modules/faqs/services/faq-configurator.service';
import { PolicyConfigurator } from './modules/policies/services/policy-configurator.service';
import { UserConfigurator } from './modules/users/services/user-configurator.service';

AdminJS.registerAdapter({
	Resource: AdminJSTypeOrm.Resource,
	Database: AdminJSTypeOrm.Database,
});

@Module({
	exports: [AdminJSOptionsConfigurator, AdminJSResourcesConfigurator],
	imports: [
		AdminJSModule,
		AdminUsersModule,
		ApiKeysModule,
		BlacklistsModule,
		FAQsModule,
		PoliciesModule,
		UsersModule,
		AdminModule.createAdminAsync({
			imports: [AdminJSModule, AdminUsersModule],
			inject: [AdminJSOptionsConfigurator, AdminUserAuthenticator],
			useFactory: (
				optionsConfigurator: AdminJSOptionsConfigurator,
				adminUserAuthenticator: AdminUserAuthenticator,
			): AdminModuleOptions => ({
				adminJsOptions: optionsConfigurator.run(),
				auth: {
					authenticate: async (email, password) => adminUserAuthenticator.run({ email, password }),
					cookieName: 'adminjs',
					cookiePassword: 'secret',
				},
				sessionOptions: {
					resave: true,
					saveUninitialized: true,
					secret: 'secret',
				},
			}),
			customLoader: AdminJSLoader,
		}),
	],
	providers: [
		AdminJSResourcesConfigurator,
		AdminJSOptionsConfigurator,
		ApiKeyConfigurator,
		BlacklistIPConfigurator,
		BlacklistUserConfigurator,
		FAQConfigurator,
		PolicyConfigurator,
		UserConfigurator,
	],
})
export class AdminJSModule {}
