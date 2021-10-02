import  { combineReducers } from 'redux'
import { color_reducer} from "./Reducer";
const reducers = combineReducers({
    allColors: color_reducer,
});

export default reducers;