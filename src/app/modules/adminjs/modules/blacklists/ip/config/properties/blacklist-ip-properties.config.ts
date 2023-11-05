import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

export const blacklistIPPropertiesConfig: Record<string, PropertyOptions> = {
	id: { isRequired: true, type: 'uuid' },
	ip: { isRequired: true },
};
