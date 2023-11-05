import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { FAQEntity } from '../../../../faqs/persistence/faq.entity';
import { faqsConfig } from '../config/faqs.config';

const {
	properties,
	listProperties,
	editProperties,
	filterProperties,
	showProperties,
	actions,
	sort,
	navigation,
} = faqsConfig;

@Injectable()
export class FAQConfigurator {
	run(): ResourceWithOptions {
		const resource = FAQEntity;
		const options = this.createResourceOptions();
		const features = this.createFeatures();

		return {
			resource,
			options,
			features,
		};
	}

	private createResourceOptions(): ResourceOptions {
		return {
			properties,
			listProperties,
			editProperties,
			filterProperties,
			showProperties,
			actions,
			sort,
			navigation,
		};
	}

	private createFeatures(): Array<FeatureType> {
		return [importExportFeature()];
	}
}
