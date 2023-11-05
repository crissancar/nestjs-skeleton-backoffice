import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { apiKeyAudienceValues } from './enums-values/api-key-audience.values';

export const apiKeyPropertiesConfig: Record<string, PropertyOptions> = {
	client: { isRequired: true },
	description: { isRequired: true },
	audience: {
		isRequired: true,
		availableValues: apiKeyAudienceValues,
	},
	key: {},
	plainKey: {},
};
