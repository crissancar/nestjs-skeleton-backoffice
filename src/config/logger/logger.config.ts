import { IncomingMessage } from 'http';
import { Params } from 'nestjs-pino';
import { TransportMultiOptions } from 'pino';

import { config } from '../app/index';
import { CORRELATION_ID_HEADER } from './correlation-id.middleware';

const { logger } = config;

export const loggerConfig: Params = {
	pinoHttp: {
		level: 'debug',
		transport: {
			targets: [
				{
					target: 'pino-pretty',
					options: {
						messageKey: 'message',
						ignore: 'pid,hostname,time',
					},
					level: logger.level ? logger.level : 'info',
				},
			],
		} as unknown as TransportMultiOptions,
		messageKey: 'message',
		autoLogging: false,
		serializers: {
			req: (): undefined => {
				return undefined;
			},
			res: (): undefined => {
				return undefined;
			},
		},
		customProps: (req: IncomingMessage): object => {
			return { correlation: req[CORRELATION_ID_HEADER] };
		},
	},
};
