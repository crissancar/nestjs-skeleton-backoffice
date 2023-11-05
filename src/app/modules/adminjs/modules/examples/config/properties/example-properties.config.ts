import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

export const examplePropertiesConfig: Record<string, PropertyOptions> = {
	id: { isRequired: true, type: 'uuid', isTitle: false },
	name: { isRequired: true, isTitle: false },
};
