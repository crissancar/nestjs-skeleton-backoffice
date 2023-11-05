import { pid } from 'process';

import { LoggerFactory } from '../../app/modules/shared/services/logger-factory.service';
import { config } from '../app';

const { api, project } = config;

const logger = LoggerFactory.create('');

export class WelcomeLogs {
	static apiUrl = api.url || `http://localhost:${api.port}`;
	static projectName = project.appName;
	static pid = pid;
	static environment = config.environment;
	static PWD = config.PWD;

	static run(): void {
		logger.log(`${this.projectName}'s magic happens at ${this.apiUrl}`);
		logger.log(`Environment: ${this.environment}`);
		logger.log(`PID: ${this.pid || 'not forked'}`);
		logger.log(`Root: ${this.PWD}`);
	}
}
