import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationError } from 'class-validator';
import { LoggerModule } from 'nestjs-pino';

import { CorrelationIdMiddleware } from '../config/logger/correlation-id.middleware';
import { loggerConfig } from '../config/logger/logger.config';
import { typeOrmConfig } from '../config/orm/typeorm.config';
import { AppController } from './app.controller';
import { AdminUsersModule } from './modules/admin-users/admin-users.module';
import { AdminJSModule } from './modules/adminjs/adminjs.module';
import { ApiKeysModule } from './modules/api-keys/api-keys.module';
import { BlacklistsModule } from './modules/blacklists/blacklists.module';
import { PoliciesModule } from './modules/policies/policies.module';
import { ValidationException } from './modules/shared/exceptions/validation.exception';
import { UsersModule } from './modules/users/users.module';

@Module({
	controllers: [AppController],
	imports: [
		EventEmitterModule.forRoot(),
		LoggerModule.forRoot(loggerConfig),
		TypeOrmModule.forRoot(typeOrmConfig),
		AdminJSModule,
		AdminUsersModule,
		ApiKeysModule,
		BlacklistsModule,
		PoliciesModule,
		UsersModule,
	],
	providers: [
		{
			provide: APP_PIPE,
			useFactory: () =>
				new ValidationPipe({
					exceptionFactory: (errors: ValidationError[]) => new ValidationException(errors),
				}),
		},
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer.apply(CorrelationIdMiddleware).forRoutes('*');
	}
}
