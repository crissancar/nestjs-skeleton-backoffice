import { ApiKeyEntity } from '../../../app/modules/api-keys/persistence/api-key.entity';

declare global {
	namespace Express {
		interface Request {
			apiKey: ApiKeyEntity;
		}
	}
}

export {};
