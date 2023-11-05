interface ResourceOptionsSort {
	direction: 'asc' | 'desc';
	sortBy: string;
}

export const sortAux: ResourceOptionsSort = {
	direction: 'desc' as 'desc' | 'asc',
	sortBy: 'createdAt',
};
