import { Action, BulkActionResponse, ListActionResponse, RecordActionResponse } from 'adminjs';

import { userIsAdminAux } from '../../../shared/actions/auxiliar/user-is-admin.aux';

export const exampleActionsConfig = {
	list: {} as Partial<Action<ListActionResponse>>,
	new: {
		isVisible: true,
		isAccessible: true,
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
