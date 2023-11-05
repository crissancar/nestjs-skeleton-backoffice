import { IsFunction } from 'adminjs';

import { AdminUserAudiences } from '../../../../../admin-users/enums/admin-user-audiences.enum';

export const userIsAdminAux: boolean | IsFunction = ({ currentAdmin }) => {
	return currentAdmin && currentAdmin.audience === AdminUserAudiences.ADMIN;
};
