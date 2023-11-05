import { Action, BulkActionResponse, ListActionResponse, RecordActionResponse } from 'adminjs';

import { userIsAdminAux } from '../../../shared/actions/auxiliar/user-is-admin.aux';

export const userActionsConfig = {
	list: {} as Partial<Action<ListActionResponse>>,
	new: {
		isVisible: false,
		isAccessible: false,
	} as Partial<Action<RecordActionResponse>>,
	show: {} as Partial<Action<RecordActionResponse>>,
	edit: {
		isVisible: userIsAdminAux,
		isAccessible: userIsAdminAux,
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
