import ACTIONS from '../actionTypes';

const userInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.USER__SIGN_IN__REQUEST:
			return {
				...state,
				fetching: true,
				signInError: false,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS:
			return {
				...state,
				...payload,
				fetching: false,
				signInError: false,
				signedIn: true,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				signInError: true,
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				signedIn: false,
			};
		case ACTIONS.GET_LIST__REQUEST_SUCCESS:
			return {
				...state,
				list: payload,
			}
		case ACTIONS.GET_CLIENT_REQUEST_SUCCESS:
			return {
				...state,
				currentItem: payload,
			}
		case ACTIONS.GET_MANAGER_REQUEST_SUCCESS:
		return {
				...state,
				currentItem: payload,
			}
		case ACTIONS.DELETE_CLIENT_REQUEST_SUCCESS:
		return {
			...state,
		}
		case ACTIONS.GET_LIST__REQUEST:
		default:
			return state;
	}
};

userInfo.signIn = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST,
	payload,
});

userInfo.signInSuccess = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS,
	payload,
});

userInfo.signInError = () => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_ERROR,
});

userInfo.signOut = () => ({
	type: ACTIONS.USER__SIGN_OUT,
});

userInfo.getList = () => ({
	type: ACTIONS.GET_LIST__REQUEST,
});

userInfo.getListSuccess = (payload) => ({
	type: ACTIONS.GET_LIST__REQUEST_SUCCESS,
	payload,
});

userInfo.getListError = () => ({
	type: ACTIONS.GET_LIST__REQUEST_ERROR,
});

userInfo.createClient = (payload) => ({
	type: ACTIONS.CREATE_CLIENT_REQUEST,
	payload,
});

userInfo.createClientSuccess = (payload) => ({
	type: ACTIONS.CREATE_CLIENT_REQUEST_SUCCESS,
	payload,
});

userInfo.createClientError = () => ({
	type: ACTIONS.CREATE_CLIENT_REQUEST_ERROR,
});

userInfo.getClient = (payload) => ({
	type: ACTIONS.GET_CLIENT_REQUEST,
	payload,
});

userInfo.getClientSuccess = (payload) => ({
	type: ACTIONS.GET_CLIENT_REQUEST_SUCCESS,
	payload,
});

userInfo.getClientError = () => ({
	type: ACTIONS.GET_CLIENT_REQUEST_ERROR,
});

userInfo.deleteClient = (payload) => ({
	type: ACTIONS.DELETE_CLIENT_REQUEST,
	payload,
});

userInfo.deleteClientSuccess = (payload) => ({
	type: ACTIONS.DELETE_CLIENT_REQUEST_SUCCESS,
	payload,
});

userInfo.deleteClientError = () => ({
	type: ACTIONS.DELETE_CLIENT_REQUEST_ERROR,
});

userInfo.updateClient = (payload) => ({
	type: ACTIONS.UPDATE_CLIENT_REQUEST,
	payload,
});

userInfo.updateClientSuccess = (payload) => ({
	type: ACTIONS.UPDATE_CLIENT_REQUEST_SUCCESS,
	payload,
});

userInfo.updateClientError = () => ({
	type: ACTIONS.UPDATE_CLIENT_REQUEST_ERROR,
});

userInfo.getManager = (payload) => ({
	type: ACTIONS.GET_MANAGER_REQUEST,
	payload,
});

userInfo.getManagerSuccess = (payload) => ({
	type: ACTIONS.GET_MANAGER_REQUEST_SUCCESS,
	payload,
});

userInfo.getManagerError = () => ({
	type: ACTIONS.GET_MANAGER_REQUEST_ERROR,
});

export default userInfo;
