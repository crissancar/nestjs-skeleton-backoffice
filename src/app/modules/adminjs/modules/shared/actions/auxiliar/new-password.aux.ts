// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function newPasswordAux(request) {
	if (!request.payload.newPassword) {
		delete request.payload.password;
		delete request.payload.newPassword;

		return request;
	}

	request.payload = {
		...request.payload,
		password: request.payload.newPassword,
	};

	delete request.payload.newPassword;

	return request;
}
