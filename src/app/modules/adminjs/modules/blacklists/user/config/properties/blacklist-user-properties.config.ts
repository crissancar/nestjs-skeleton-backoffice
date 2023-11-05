import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { AdminJSComponentLoader } from '../../../../../config/app/adminjs-component-loader.service';
import { Components } from '../../../../../config/components/components.enum';

export const blacklistUserPropertiesConfig: Record<string, PropertyOptions> = {
	id: { isRequired: true, type: 'uuid' },
	userId: {
		reference: 'UserEntity',
		isRequired: true,
		components: {
			edit: AdminJSComponentLoader.run(Components.NON_EDITABLE_PROPERTY),
		},
	},
	reason: { isRequired: true },
};
