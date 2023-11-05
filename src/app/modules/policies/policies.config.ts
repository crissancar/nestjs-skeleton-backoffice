export const policiesConfig = {
	entity: { name: 'policy' },
	entitySubscriber: {
		constants: {
			className: 'PolicyEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `Policy with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `Policy with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `Policy with id <${id}> has been deleted`,
		},
	},
};
