import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { BlacklistUserEntity } from '../../../../../blacklists/user/persistence/blacklist-user.entity';
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
} = blacklistsConfig.user;

@Injectable()
export class BlacklistUserConfigurator {
	run(): ResourceWithOptions {
		const resource = BlacklistUserEntity;
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
