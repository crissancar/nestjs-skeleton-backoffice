import { faqActionsConfig } from './actions/faq-actions.config';
import { faqNavigationOptionsConfig } from './navigation/faq-navigation-options.config';
import { faqEditPropertiesConfig } from './properties/faq-edit-properties.config';
import { faqFilterPropertiesConfig } from './properties/faq-filter-properties.config';
import { faqListPropertiesConfig } from './properties/faq-list-properties.config';
import { faqPropertiesConfig } from './properties/faq-properties.config';
import { faqShowPropertiesConfig } from './properties/faq-show-properties.config';
import { faqSortConfig } from './sort/faq-sort.config';

export const faqsConfig = {
	actions: faqActionsConfig,
	properties: faqPropertiesConfig,
	listProperties: faqListPropertiesConfig,
	editProperties: faqEditPropertiesConfig,
	filterProperties: faqFilterPropertiesConfig,
	showProperties: faqShowPropertiesConfig,
	sort: faqSortConfig,
	navigation: faqNavigationOptionsConfig,
};
