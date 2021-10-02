import {all} from "redux-saga/effects";
import {waitForFetchColor} from './Color';

export default function* SagaRoot(){
    yield all([waitForFetchColor()]);
}
