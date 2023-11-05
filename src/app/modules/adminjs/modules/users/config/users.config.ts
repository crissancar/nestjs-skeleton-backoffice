import { userActionsConfig } from './actions/user-actions.config';
import { userNavigationOptionsConfig } from './navigation/user-navigation-options.config';
import { userEditPropertiesConfig } from './properties/user-edit-properties.config';
import { userFilterPropertiesConfig } from './properties/user-filter-properties.config';
import { userListPropertiesConfig } from './properties/user-list-properties.config';
import { userPropertiesConfig } from './properties/user-properties.config';
import { userShowPropertiesConfig } from './properties/user-show-properties.config';
import { userSortConfig } from './sort/user-sort.config';

export const usersConfig = {
	actions: userActionsConfig,
	properties: userPropertiesConfig,
	listProperties: userListPropertiesConfig,
	editProperties: userEditPropertiesConfig,
	filterProperties: userFilterPropertiesConfig,
	showProperties: userShowPropertiesConfig,
	sort: userSortConfig,
	navigation: userNavigationOptionsConfig,
};
