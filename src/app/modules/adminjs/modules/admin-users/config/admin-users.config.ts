import { adminUserActionsConfig } from './actions/admin-user-actions.config';
import { adminUserNavigationOptionsConfig } from './navigation/admin-user-navigation-options.config';
import { adminUserEditPropertiesConfig } from './properties/admin-user-edit-properties.config';
import { adminUserFilterPropertiesConfig } from './properties/admin-user-filter-properties.config';
import { adminUserListPropertiesConfig } from './properties/admin-user-list-properties.config';
import { adminUserPropertiesConfig } from './properties/admin-user-properties.config';
import { adminUserShowPropertiesConfig } from './properties/admin-user-show-properties.config';
import { adminUserSortConfig } from './sort/admin-user-sort.config';

export const adminUsersConfig = {
	actions: adminUserActionsConfig,
	properties: adminUserPropertiesConfig,
	listProperties: adminUserListPropertiesConfig,
	editProperties: adminUserEditPropertiesConfig,
	filterProperties: adminUserFilterPropertiesConfig,
	showProperties: adminUserShowPropertiesConfig,
	sort: adminUserSortConfig,
	navigation: adminUserNavigationOptionsConfig,
};
