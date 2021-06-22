export const loadMeetingsAction = (meetings) => {
	return {
		type: 'Load',
		payload: {meetings}
	}
}

export const saveMeetingAction = (meeting) => {
	return {
		type: 'Add',
		payload: {meeting}
	}
}