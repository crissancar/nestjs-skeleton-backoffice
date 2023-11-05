import { Controller, Get, Redirect } from '@nestjs/common';

import { LoggerFactory } from './modules/shared/services/logger-factory.service';

const logger = LoggerFactory.create('AppController');

@Controller()
export class AppController {
	@Get()
	@Redirect('/admin')
	run(): void {
		logger.log('Redirecting to AdminJS...');
	}

	@Get('health-check')
	healthCheck(): string {
		return 'OK';
	}
}
