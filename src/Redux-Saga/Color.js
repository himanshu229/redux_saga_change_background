import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../Redux/constants/ActionType'
import { setColors } from '../Redux/actions/Actions'
import Fetchapi from './Fetchapi';

let index = 0
function* fetchColor() {
    while (index < 1) {
        index ++
        try {
            const colors = yield call(Fetchapi);
            yield put(setColors(colors))
        }
        catch (e) { }
    }
}

export function* waitForFetchColor() {
    yield takeEvery(ActionTypes.SET_COLORS, fetchColor);
}