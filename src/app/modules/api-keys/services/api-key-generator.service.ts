import { generateApiKey } from 'generate-api-key';

import { LoggerFactory } from '../../shared/services/logger-factory.service';
import { apiKeysConfig } from '../api-keys.config';

const { generator } = apiKeysConfig;
const { className } = generator.constants;
const { requestLog } = generator.logs;

const logger = LoggerFactory.create(className);

export class ApiKeyGenerator {
	static run(): string {
		logger.log(requestLog);

		return generateApiKey({ method: 'base62' }) as string;
	}
}
