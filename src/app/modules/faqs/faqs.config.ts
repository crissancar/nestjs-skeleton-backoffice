export const faqsConfig = {
	entity: { name: 'faq' },
	entitySubscriber: {
		constants: {
			className: 'FAQEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `FAQ with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `FAQ with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `FAQ with id <${id}> has been deleted`,
		},
	},
};
