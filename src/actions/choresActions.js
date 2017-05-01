
export function addChore( name ) {
	return {
		type: 'ADD_CHORE',
		name
	}
}

export function deleteChore( choreId ) {
	return {
		type: 'DELETE_CHORE',
		choreId
	}
}

export function editChore( choreId, name ) {
	return {
		type: 'EDIT_CHORE',
		choreId,
		name
	}
}
