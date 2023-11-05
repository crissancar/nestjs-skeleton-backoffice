import { BasePropertyComponent } from 'adminjs';
import React from 'react';

const NonEditableProperty = (props) => {
	const { property, record: initialRecord } = props;
	const cleanProperty = React.useMemo(() => ({ ...property, components: {} }), [property]);

	const BaseComponent = BasePropertyComponent as any;

	if (!initialRecord?.id) {
		cleanProperty.isDisabled = false;

		return <BaseComponent {...props} property={cleanProperty} />;
	}

	cleanProperty.isDisabled = true;

	return <BaseComponent {...props} property={cleanProperty} isDisabled />;
};

export default NonEditableProperty;
