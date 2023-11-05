import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { ApiKeyEntity } from '../../../../api-keys/persistence/api-key.entity';
import { apiKeysConfig } from '../config/api-keys.config';

const {
	properties,
	showProperties,
	listProperties,
	editProperties,
	filterProperties,
	actions,
	sort,
	navigation,
} = apiKeysConfig;

@Injectable()
export class ApiKeyConfigurator {
	run(): ResourceWithOptions {
		const resource = ApiKeyEntity;
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
