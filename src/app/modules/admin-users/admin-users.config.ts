export const adminUsersConfig = {
	entity: { name: 'admin_user' },
	repository: {
		repositoryInterface: 'AdminUserRepository',
	},
	authenticator: {
		constants: {
			className: 'AdminUserAuthenticator',
		},
		logs: {
			requestLog: 'Authenticating an admin user',
			responseLog: 'Admin user authenticated',
			adminUserNotExistsLog: 'Admin user not exists',
			invalidCredentialsLog: 'Invalid credentials',
		},
	},
	finder: {
		constants: {
			className: 'AdminUserFinder',
		},
		logs: {
			requestLog: 'Running finder service',
		},
	},
	entitySubscriber: {
		constants: {
			className: 'AdminUserEntitySubscriber',
		},
		logs: {
			afterInsertLog: (id: string): string => `Admin user with id <${id}> has been created`,
			afterUpdateLog: (id: string): string => `Admin user with id <${id}> has been updated`,
			afterDeleteLog: (id: string): string => `Admin user with id <${id}> has been deleted`,
		},
	},
	typeOrmRepository: {
		constants: {
			className: 'TypeOrmAdminUserRepository',
		},
		logs: {
			findByEmailRequestLog: (email: string): string => `Finding admin user with email <${email}>`,
		},
	},
};
