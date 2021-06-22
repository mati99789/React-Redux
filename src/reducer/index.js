const initial = {
	meetings: []
};

const reducer = (state = initial, action) => {
	switch (action.type) {
		case 'Load':
			return {
				...state,
				meetings: action.payload.meetings
			};
		case 'Add':
			return {
				...state,
				meetings: [...state.meetings, action.payload.meeting]
			};
		default:
			return state;
	}
};

export default reducer;