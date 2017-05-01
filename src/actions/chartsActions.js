export function addChart( name ) {
	return {
		type: 'ADD_CHART',
		name
	}
}

export function editChart( chartId, name ) {
	return {
		type: 'EDIT_CHART',
		chartId,
		name
	}
}

export function addChoreToChart( chartId, choreId, ownerId ) {
	return {
		type: 'ADD_CHORE_TO_CHART',
		chartId,
		choreId,
		ownerId
	}
}