import { Action, BulkActionResponse, ListActionResponse, RecordActionResponse } from 'adminjs';

import { newPasswordAux } from '../../../shared/actions/auxiliar/new-password.aux';
import { userIsAdminAux } from '../../../shared/actions/auxiliar/user-is-admin.aux';

export const adminUserActionsConfig = {
	list: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
	} as Partial<Action<ListActionResponse>>,
	new: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
		before: newPasswordAux,
	} as Partial<Action<RecordActionResponse>>,
	show: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
	} as Partial<Action<RecordActionResponse>>,
	edit: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
		before: newPasswordAux,
	} as Partial<Action<RecordActionResponse>>,
	delete: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
	} as Partial<Action<RecordActionResponse>>,
	bulkDelete: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
	} as Partial<Action<BulkActionResponse>>,
};
