import { NestFactory } from '@nestjs/core';
import express from 'express';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app/app.module';
import { config } from './config/app/index';
import { WelcomeLogs } from './config/logger/welcome-logs.config';

const { api } = config;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Set pino logger
	app.useLogger(app.get(Logger));

	// Set static to read files
	app.use('/assets', express.static(api.staticPath));

	// Launch the app
	await app.listen(api.port);

	// Welcome logs
	WelcomeLogs.run();
}
void bootstrap();
