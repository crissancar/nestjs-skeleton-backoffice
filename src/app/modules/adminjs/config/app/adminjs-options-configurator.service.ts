import { Injectable } from '@nestjs/common';
import { AdminJSOptions, ResourceWithOptions } from 'adminjs';

import { assetsOptions } from '../options/assets.options';
import { brandingOptions } from '../options/branding.options';
import { dashboardOptions } from '../options/dashboard.options';
import { envOptions } from '../options/env.options';
import { localeOptions } from '../options/locale.options';
import { versionOptions } from '../options/version.options';
import { AdminJSResourcesConfigurator } from './adminjs-resources-configurator.service';

@Injectable()
export class AdminJSOptionsConfigurator {
	constructor(private readonly resourcesConfigurator: AdminJSResourcesConfigurator) {}

	run(): AdminJSOptions {
		return this.createAdminJSOptions();
	}

	private createAdminJSOptions(): AdminJSOptions {
		const adminPath = '/admin';

		return {
			rootPath: adminPath,
			version: versionOptions,
			assets: assetsOptions,
			branding: brandingOptions,
			dashboard: dashboardOptions,
			env: envOptions,
			locale: localeOptions,
			resources: this.getResourceOptions(),
		};
	}

	private getResourceOptions(): Array<ResourceWithOptions> {
		return this.resourcesConfigurator.run();
	}
}
