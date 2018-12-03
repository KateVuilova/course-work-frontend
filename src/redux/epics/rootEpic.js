import { combineEpics } from 'redux-observable';
import {
	signInEpic,
	signOutEpic,
	getListEpic,
	createClientEpic,
	getClientEpic,
	deleteClientEpic,
} from './userInfo';

export default combineEpics(
	signInEpic,
	signOutEpic,
	getListEpic,
	createClientEpic,
	getClientEpic,
	deleteClientEpic,
);
