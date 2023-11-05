interface Navigation {
	name: string;
	icon: string;
}

const domain: Navigation = {
	name: 'Domain',
	icon: 'Enterprise',
};

const system: Navigation = {
	name: 'System',
	icon: 'DataUnstructured',
};

const blacklists: Navigation = {
	name: 'Blacklists',
	icon: 'Document',
};

const users: Navigation = {
	name: 'Users',
	icon: 'UserMultiple',
};

const policies: Navigation = {
	name: 'Policies',
	icon: 'Policy',
};

const faqs: Navigation = {
	name: 'FAQs',
	icon: 'IbmWatsonKnowledgeCatalog',
};

export const navigationOptions = {
	domain,
	system,
	blacklists,
	users,
	policies,
	faqs,
};
