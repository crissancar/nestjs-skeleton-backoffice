import AdminJS from 'adminjs';

import { Components, ComponentsPaths } from '../components/components.enum';

export class AdminJSComponentLoader {
	static run(component: Components): string {
		const path = ComponentsPaths[component];

		return this.createComponent(component, path);
	}

	private static createComponent(component: string, path: string): string {
		const loader = AdminJS.__unsafe_staticComponentLoader;

		return loader.add(component, path);
	}
}
