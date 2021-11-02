import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './constants';

export const getUserRequest = () => {
	return {
		type: GET_USER_REQUEST,
	};
};

export const getUserSuccess = (user) => {
	return {
		type: GET_USER_SUCCESS,
		payload: user,
	};
};
export const getUserFailure = (error) => {
	return {
		type: GET_USER_FAILURE,
		payload: error,
	};
};
