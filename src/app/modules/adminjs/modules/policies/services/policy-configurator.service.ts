import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { PolicyEntity } from '../../../../policies/persistence/policy.entity';
import { policiesConfig } from '../config/policies.config';

const {
	actions,
	properties,
	listProperties,
	editProperties,
	filterProperties,
	showProperties,
	sort,
	navigation,
} = policiesConfig;

@Injectable()
export class PolicyConfigurator {
	run(): ResourceWithOptions {
		const resource = PolicyEntity;
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
