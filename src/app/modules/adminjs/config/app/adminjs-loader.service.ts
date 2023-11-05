import { AbstractLoader, AdminModuleOptions, ExpressLoader } from '@adminjs/nestjs';
import { Injectable } from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';
import AdminJS from 'adminjs';

import { LoggerFactory } from '../../../shared/services/logger-factory.service';
import Login from '../../components/login.component';

const logger = LoggerFactory.create('AdminJSModuleLoader');

@Injectable()
export class AdminJSLoader extends AbstractLoader {
	register(admin: AdminJS, httpAdapter: AbstractHttpAdapter, options: AdminModuleOptions): void {
		logger.log('Loading our AdminJS Module custom loader');

		admin.overrideLogin({ component: Login });

		new ExpressLoader().register(admin, httpAdapter, options);
	}
}
