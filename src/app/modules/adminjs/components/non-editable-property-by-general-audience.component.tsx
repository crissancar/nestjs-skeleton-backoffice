import { BasePropertyComponent, useCurrentAdmin } from 'adminjs';
import React from 'react';

import { AdminUserAudiences } from '../../admin-users/enums/admin-user-audiences.enum';

const NonEditablePropertyByGeneralAudience = (props) => {
	const { property, record: initialRecord } = props;
	const cleanProperty = React.useMemo(() => ({ ...property, components: {} }), [property]);

	const [currentAdmin] = useCurrentAdmin();
	const userAudience = currentAdmin.audience;

	const BaseComponent = BasePropertyComponent as any;

	if (!initialRecord?.id) {
		cleanProperty.isDisabled = false;

		return <BaseComponent {...props} property={cleanProperty} />;
	}

	AdminUserAudiences.ADMIN === userAudience
		? (cleanProperty.isDisabled = false)
		: (cleanProperty.isDisabled = true);

	return <BaseComponent {...props} property={cleanProperty} isDisabled />;
};

export default NonEditablePropertyByGeneralAudience;
