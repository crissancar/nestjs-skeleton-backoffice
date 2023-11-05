import { apiKeyActionsConfig } from './actions/api-key-actions.config';
import { apiKeyNavigationOptionsConfig } from './navigation/api-key-navigation-options.config';
import { apiKeyEditPropertiesConfig } from './properties/api-key-edit-properties.config';
import { apiKeyFilterPropertiesConfig } from './properties/api-key-filter-properties.config';
import { apiKeyListPropertiesConfig } from './properties/api-key-list-properties.config';
import { apiKeyPropertiesConfig } from './properties/api-key-properties.config';
import { apiKeyShowPropertiesConfig } from './properties/api-key-show-properties.config';
import { apiKeySortConfig } from './sort/api-key-sort.config';

export const apiKeysConfig = {
	actions: apiKeyActionsConfig,
	properties: apiKeyPropertiesConfig,
	listProperties: apiKeyListPropertiesConfig,
	editProperties: apiKeyEditPropertiesConfig,
	filterProperties: apiKeyFilterPropertiesConfig,
	showProperties: apiKeyShowPropertiesConfig,
	sort: apiKeySortConfig,
	navigation: apiKeyNavigationOptionsConfig,
};
