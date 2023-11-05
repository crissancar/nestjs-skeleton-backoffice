import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { BlacklistIPEntity } from '../../../../../blacklists/ip/persistence/blacklist-ip.entity';
import { blacklistsConfig } from '../../config/blacklists.config';

const {
	properties,
	listProperties,
	editProperties,
	filterProperties,
	showProperties,
	actions,
	sort,
	navigation,
} = blacklistsConfig.ip;

@Injectable()
export class BlacklistIPConfigurator {
	run(): ResourceWithOptions {
		const resource = BlacklistIPEntity;
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
