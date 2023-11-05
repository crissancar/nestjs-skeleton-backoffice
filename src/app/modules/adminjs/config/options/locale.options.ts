import { Locale } from 'adminjs/src/locale/config';

import { actionsTranslations } from '../translations/actions.translations';
import { buttonsTranslations } from '../translations/buttons.translations';
import { labelsTranslations } from '../translations/labels.translations';
import { messagesTranslations } from '../translations/messages.translations';
import { propertiesTranslations } from '../translations/properties.translations';
import { resourcesTranslations } from '../translations/resources.translations';

export const localeOptions: Locale = {
	language: 'en',
	translations: {
		actions: actionsTranslations,
		buttons: buttonsTranslations,
		labels: labelsTranslations,
		messages: messagesTranslations,
		properties: propertiesTranslations,
		resources: resourcesTranslations,
	},
};
