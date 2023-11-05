export const apiKeysConfig = {
	entity: { name: 'api_key' },
	generator: {
		constants: {
			className: 'ApiKeyGenerator',
		},
		logs: {
			requestLog: 'Generating an api key',
		},
	},
	entitySubscriber: {
		constants: {
			className: 'ApiKeyEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `Api key with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `Api key with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `Api key with id <${id}> has been deleted`,
		},
	},
};
