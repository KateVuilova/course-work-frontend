import { combineEpics } from 'redux-observable';
import {
	signInEpic,
	signOutEpic,
	getListEpic,
} from './userInfo';

export default combineEpics(
	signInEpic,
	signOutEpic,
	getListEpic,
);
