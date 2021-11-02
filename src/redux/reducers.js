import { getUserFailure, getUserRequest, getUserSuccess } from './actions';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './constants';

let initialState = {
	user: null,
	error: '',
	loading: false,
};
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		case GET_USER_FAILURE:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		default:
			return state;
	}
};

export const getUSerData = () => {
	return async (dispatch) => {
		try {
			dispatch(getUserRequest());
			const req = await fetch('http://localhost:3000/api/v1/user');
			const res = await req.json();
			console.log(res);
			dispatch(getUserSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(getUserFailure(error));
		}
	};
};
