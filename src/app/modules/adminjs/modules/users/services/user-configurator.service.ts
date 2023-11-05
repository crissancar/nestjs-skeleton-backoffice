import importExportFeature from '@adminjs/import-export';
import { Injectable } from '@nestjs/common';
import { FeatureType, ResourceOptions, ResourceWithOptions } from 'adminjs';

import { UserEntity } from '../../../../users/persistence/user.entity';
import { usersConfig } from '../config/users.config';

const {
	properties,
	listProperties,
	editProperties,
	filterProperties,
	showProperties,
	actions,
	sort,
	navigation,
} = usersConfig;

@Injectable()
export class UserConfigurator {
	run(): ResourceWithOptions {
		const resource = UserEntity;
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
