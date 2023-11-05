import { blacklistIPActionsConfig } from '../ip/config/actions/blacklist-ip-actions.config';
import { blacklistIPNavigationOptionsConfig } from '../ip/config/navigation/blacklist-ip-navigation-options.config';
import { blacklistIPEditPropertiesConfig } from '../ip/config/properties/blacklist-ip-edit-properties.config';
import { blacklistIPFilterPropertiesConfig } from '../ip/config/properties/blacklist-ip-filter-properties.config';
import { blacklistIPListPropertiesConfig } from '../ip/config/properties/blacklist-ip-list-properties.config';
import { blacklistIPPropertiesConfig } from '../ip/config/properties/blacklist-ip-properties.config';
import { blacklistIPShowPropertiesConfig } from '../ip/config/properties/blacklist-ip-show-properties.config';
import { blacklistIPSortConfig } from '../ip/config/sort/blacklist-ip-sort.config';
import { blacklistUserActionsConfig } from '../user/config/actions/blacklist-user-actions.config';
import { blacklistUserNavigationOptionsConfig } from '../user/config/navigation/blacklist-user-navigation-options.config';
import { blacklistUserEditPropertiesConfig } from '../user/config/properties/blacklist-user-edit-properties.config';
import { blacklistUserFilterPropertiesConfig } from '../user/config/properties/blacklist-user-filter-properties.config';
import { blacklistUserListPropertiesConfig } from '../user/config/properties/blacklist-user-list-properties.config';
import { blacklistUserPropertiesConfig } from '../user/config/properties/blacklist-user-properties.config';
import { blacklistUserShowPropertiesConfig } from '../user/config/properties/blacklist-user-show-properties.config';
import { blacklistUserSortConfig } from '../user/config/sort/blacklist-user-sort.config';

export const blacklistsConfig = {
	ip: {
		actions: blacklistIPActionsConfig,
		properties: blacklistIPPropertiesConfig,
		listProperties: blacklistIPListPropertiesConfig,
		editProperties: blacklistIPEditPropertiesConfig,
		filterProperties: blacklistIPFilterPropertiesConfig,
		showProperties: blacklistIPShowPropertiesConfig,
		sort: blacklistIPSortConfig,
		navigation: blacklistIPNavigationOptionsConfig,
	},
	user: {
		actions: blacklistUserActionsConfig,
		properties: blacklistUserPropertiesConfig,
		listProperties: blacklistUserListPropertiesConfig,
		editProperties: blacklistUserEditPropertiesConfig,
		filterProperties: blacklistUserFilterPropertiesConfig,
		showProperties: blacklistUserShowPropertiesConfig,
		sort: blacklistUserSortConfig,
		navigation: blacklistUserNavigationOptionsConfig,
	},
};
