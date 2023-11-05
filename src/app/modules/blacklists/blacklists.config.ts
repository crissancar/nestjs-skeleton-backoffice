export const blacklistsConfig = {
	ip: {
		entity: { name: 'blacklist_ip' },
		entitySubscriber: {
			constants: {
				className: 'BlacklistIPEntitySubscriber',
			},
			logs: {
				afterInsertLog: (id: string): string => `Blacklist IP with id <${id}> has been created`,
				afterUpdateLog: (id: string): string => `Blacklist IP with id <${id}> has been updated`,
				afterDeleteLog: (id: string): string => `Blacklist IP with id <${id}> has been deleted`,
			},
		},
	},
	user: {
		entity: { name: 'blacklist_user' },
		entitySubscriber: {
			constants: {
				className: 'BlacklistUserEntitySubscriber',
			},
			logs: {
				afterInsertLog: (id: string): string => `Blacklist user with id <${id}> has been created`,
				afterUpdateLog: (id: string): string => `Blacklist user with id <${id}> has been updated`,
				afterDeleteLog: (id: string): string => `Blacklist user with id <${id}> has been deleted`,
			},
		},
	},
};
