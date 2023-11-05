export const usersConfig = {
	entity: { name: 'user' },
	entitySubscriber: {
		constants: {
			className: 'UserEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `User with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `User with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `User with id <${id}> has been deleted`,
		},
	},
};
