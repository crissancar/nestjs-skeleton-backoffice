import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { ExampleEntity } from '../../../../examples/persistence/example.entity';
import { examplesConfig } from '../config/examples.config';

const {
	properties,
	listProperties,
	editProperties,
	filterProperties,
	showProperties,
	actions,
	sort,
	navigation,
} = examplesConfig;

@Injectable()
export class ExampleConfigurator {
	run(): ResourceWithOptions {
		const resource = ExampleEntity;
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
