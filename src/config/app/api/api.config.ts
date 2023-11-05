import path from 'path';

export const apiConfig = {
	api: {
		url: null as string,
		port: process.env.PORT || 9978,
		staticPath: path.join(`${process.cwd()}/src/app/modules/adminjs`, 'assets'),
	},
};
