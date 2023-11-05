import { policyActionsConfig } from './actions/policy-actions.config';
import { policyNavigationOptionsConfig } from './navigation/policy-navigation-options.config';
import { policyEditPropertiesConfig } from './properties/policy-edit-properties.config';
import { policyFilterPropertiesConfig } from './properties/policy-filter-properties.config';
import { policyListPropertiesConfig } from './properties/policy-list-properties.config';
import { policyPropertiesConfig } from './properties/policy-properties.config';
import { policyShowPropertiesConfig } from './properties/policy-show-properties.config';
import { policySortConfig } from './sort/policy-sort.config';

export const policiesConfig = {
	actions: policyActionsConfig,
	properties: policyPropertiesConfig,
	listProperties: policyListPropertiesConfig,
	editProperties: policyEditPropertiesConfig,
	filterProperties: policyFilterPropertiesConfig,
	showProperties: policyShowPropertiesConfig,
	sort: policySortConfig,
	navigation: policyNavigationOptionsConfig,
};
