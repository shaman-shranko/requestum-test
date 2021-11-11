import {
	APP_DATA_LIST,
} from '../constants/app';

const INITIAL_STATE = {
	data: null,
};

export default repoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case APP_DATA_LIST: {
			return {
				...state,
				...action.payload
			}
		}
		default: {
			return state;
		}
	}
}
