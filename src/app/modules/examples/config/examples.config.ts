export const examplesConfig = {
	entity: { name: 'example' },
	entitySubscriber: {
		constants: {
			className: 'ExampleEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `Example with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `Example with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `Example with id <${id}> has been deleted`,
		},
	},
};
