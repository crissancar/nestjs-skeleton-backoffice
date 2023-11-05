import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { userAudienceValues } from './enums-values/user-audience.values';

export const userPropertiesConfig: Record<string, PropertyOptions> = {
	id: { isRequired: true, type: 'uuid', isTitle: false },
	name: { isRequired: true, isTitle: false },
	email: { isRequired: true, isTitle: true },
	password: { isVisible: false },
	newPassword: {
		position: 200,
		type: 'password',
		isVisible: {
			list: false,
			edit: true,
			filter: false,
			show: false,
		},
	},
	audiences: {
		availableValues: userAudienceValues,
	},
};
