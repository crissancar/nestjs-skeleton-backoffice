import { AdminJSComponentLoader } from '../app/adminjs-component-loader.service';
import { Components } from '../components/components.enum';

interface AdminJSDashboardOptions {
	component: string;
}

export const dashboardOptions: AdminJSDashboardOptions = {
	component: AdminJSComponentLoader.run(Components.DASHBOARD),
};
