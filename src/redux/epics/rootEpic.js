import { combineEpics } from 'redux-observable';
import {
	signInEpic,
	signOutEpic,
	getListEpic,
	createClientEpic,
	getClientEpic,
	deleteClientEpic,
	updateClientEpic,
	getManagerEpic,
} from './userInfo';

export default combineEpics(
	signInEpic,
	signOutEpic,
	getListEpic,
	createClientEpic,
	getClientEpic,
	deleteClientEpic,
	updateClientEpic,
	getManagerEpic,
);
