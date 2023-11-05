import { Injectable } from '@nestjs/common';
import { ResourceWithOptions } from 'adminjs';

import { AdminUserConfigurator } from '../../modules/admin-users/services/admin-user-configurator.service';
import { ApiKeyConfigurator } from '../../modules/api-keys/services/api-key-configurator.service';
import { BlacklistIPConfigurator } from '../../modules/blacklists/ip/services/blacklist-ip-configurator.service';
import { BlacklistUserConfigurator } from '../../modules/blacklists/user/services/blacklist-user-configurator.service';
import { FAQConfigurator } from '../../modules/faqs/services/faq-configurator.service';
import { PolicyConfigurator } from '../../modules/policies/services/policy-configurator.service';
import { UserConfigurator } from '../../modules/users/services/user-configurator.service';

@Injectable()
export class AdminJSResourcesConfigurator {
	constructor(
		private readonly adminUserConfigurator: AdminUserConfigurator,
		private readonly apiKeyConfigurator: ApiKeyConfigurator,
		private readonly blacklistIPConfigurator: BlacklistIPConfigurator,
		private readonly blacklistUserConfigurator: BlacklistUserConfigurator,
		private readonly faqConfigurator: FAQConfigurator,
		private readonly policyConfigurator: PolicyConfigurator,
		private readonly userConfigurator: UserConfigurator,
	) {}

	run(): Array<ResourceWithOptions> {
		return this.createResourceOptions();
	}

	private createResourceOptions(): Array<ResourceWithOptions> {
		return [
			this.adminUserConfigurator.run(),
			this.apiKeyConfigurator.run(),
			this.blacklistIPConfigurator.run(),
			this.blacklistUserConfigurator.run(),
			this.faqConfigurator.run(),
			this.policyConfigurator.run(),
			this.userConfigurator.run(),
		];
	}
}
