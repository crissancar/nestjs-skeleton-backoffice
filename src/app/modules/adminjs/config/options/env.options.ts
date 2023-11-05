import { config } from '../../../../../config/app/index';

const { rancher } = config;

type AdminJSEnvOptions = Record<string, string>;

export const envOptions: AdminJSEnvOptions = {
	SKELETON_BACKOFFICE_rancher_env: rancher.env,
};
