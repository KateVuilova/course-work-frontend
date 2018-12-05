import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { concat, ignoreElements, switchMap, tap, delay, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';
import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { appInfo, userInfo } from '../reducers';

const { routes } = constants;

const { api } = constants.common;
const { USER_ACCESS_TOKEN, FIREBASE_ACCESS_TOKEN } = constants.common.localStorageKeys;

const signInFetch = (body) => httpApi.post(`${api}/auth/token`, body);

const getListFetch = (Authorization) => {
	return httpApi.get(`${api}/abstractObject/get_all`, { Authorization });
};

const createClienFetch = (Authorization, body) => httpApi.post(`${api}/client`, body);
const getClientFetch = (Authorization, id) => httpApi.get(`${api}/client/${id}`, { Authorization });
const deleteClientFetch = (Authorization, id) => httpApi.delete(`${api}/client/${id}`, { Authorization });
const updateClientFetch = (Authorization, body) => httpApi.put(`${api}/client`, body, { Authorization });
const getManagerFetch = (Authorization, id) => httpApi.get(`${api}/manager/${id}`, { Authorization });

const getAccessTokenFromStore = (store) => {
	const state = store.value;
	return state.userInfo && state.userInfo.accessToken;
};

const saveAccessToken = (accessToken) => localStorage.setItem(USER_ACCESS_TOKEN, accessToken);

const createListOfUSerInfoActions = ([res]) => {
	if (res.error) {
		return of(appInfo.updateLoadState(false), userInfo.signOut());
	}
	const action$ = of(userInfo.getUserInfoSuccess(res));
	return action$.pipe(concat(of(appInfo.updateLoadState(false)).pipe(delay(1000))));
};

let firebaseAuthRef;

export const signInEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_IN__REQUEST).pipe(
		switchMap(({ payload }) => {
			const body = { ...payload, grantType: 'password' }
			return signInFetch(body);
		}),
		switchMap((res) => fromPromise(res.json())),
		tap(({ accessToken }) => {
			if (accessToken) {
				saveAccessToken(accessToken);
			}
		}),
		switchMap((res) => {
			if (res.error) return of(userInfo.signInError());
			return of(userInfo.signInSuccess(res));
		})
	);
};

export const signOutEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_OUT).pipe(
		tap(() => {
			localStorage.removeItem(FIREBASE_ACCESS_TOKEN);
			localStorage.removeItem(USER_ACCESS_TOKEN);
			firebaseAuthRef.signOut();
		}),
		ignoreElements()
	);
};

export const getListEpic = (action$, store) => {
	return action$.ofType(ACTIONS.GET_LIST__REQUEST).pipe(
		switchMap(() => {
			const accessToken = getAccessTokenFromStore(store);
			if (!accessToken) return empty();
			return getListFetch(accessToken);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap((res) => {
			if (res.error) {
				return of(userInfo.getListError());
			}
			return of(userInfo.getListSuccess(res));
		}),

	);
};

export const createClientEpic = (action$, store) => {
	return action$.ofType(ACTIONS.CREATE_CLIENT_REQUEST).pipe(
		switchMap(({ payload }) => {
			const body = { ...payload, type: 'Client' }
			const accessToken = getAccessTokenFromStore(store);
			return createClienFetch(accessToken, body);
		}),
		switchMap((res) => {
			if (res.error) return of(userInfo.createClientError());
			return of(userInfo.createClientSuccess(res));
		})
	);
};

export const getClientEpic = (action$, store) => {
	return action$.ofType(ACTIONS.GET_CLIENT_REQUEST).pipe(
		switchMap(({ payload }) => {
			const accessToken = getAccessTokenFromStore(store);
			if (!accessToken) return empty();
			return getClientFetch(accessToken, payload);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap((res) => {
			if (res.error) {
				return of(userInfo.getClientError());
			}
			return of(userInfo.getClientSuccess(res));
		}),

	);
};

export const deleteClientEpic = (action$, store) => {
	return action$.ofType(ACTIONS.DELETE_CLIENT_REQUEST).pipe(
		switchMap(({ payload }) => {
			const accessToken = getAccessTokenFromStore(store);
			if (!accessToken) return empty();
			return deleteClientFetch(accessToken, payload);
		}),
		switchMap((res) => {
			if (res.error) {
				return of(userInfo.deleteClientError());
			}
			return of(userInfo.deleteClientSuccess(res));
		}),

	);
};

export const updateClientEpic = (action$, store) => {
	return action$.ofType(ACTIONS.UPDATE_CLIENT_REQUEST).pipe(
		switchMap(({ payload }) => {
			const body = { ...payload, type: 'Client' }
			const accessToken = getAccessTokenFromStore(store);
			return updateClientFetch(accessToken, body);
		}),
		switchMap((res) => {
			if (res.error) return of(userInfo.updateClientError());
			return of(userInfo.updateClientSuccess(res));
		})
	);
};

export const getManagerEpic = (action$, store) => {
	return action$.ofType(ACTIONS.GET_MANAGER_REQUEST).pipe(
		switchMap(({ payload }) => {
			const accessToken = getAccessTokenFromStore(store);
			if (!accessToken) return empty();
			return getManagerFetch(accessToken, payload);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap((res) => {
			if (res.error) {
				return of(userInfo.getManagerError());
			}
			return of(userInfo.getManagerSuccess(res));
		}),

	);
};
