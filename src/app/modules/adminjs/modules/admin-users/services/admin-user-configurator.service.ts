import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { AdminUserEntity } from '../../../../admin-users/persistence/admin-user.entity';
import { adminUsersConfig } from '../config/admin-users.config';

const {
	actions,
	properties,
	showProperties,
	listProperties,
	filterProperties,
	editProperties,
	navigation,
	sort,
} = adminUsersConfig;

@Injectable()
export class AdminUserConfigurator {
	run(): ResourceWithOptions {
		const resource = AdminUserEntity;
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
