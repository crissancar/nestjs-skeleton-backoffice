import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { adminUserAudienceValues } from './enums-values/admin-user-audience.values';

export const adminUserPropertiesConfig: Record<string, PropertyOptions> = {
	name: { isRequired: true },
	email: { isRequired: true },
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
	audience: {
		availableValues: adminUserAudienceValues,
	},
};
