import { createStore,applyMiddleware,compose } from 'redux';
import reducers from './reducers/Index';
import createSagaMiddleware from 'redux-saga';
import SagaRoot from '../Redux-Saga/SagaRoot';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)(createStore)(reducers)

// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
sagaMiddleware.run(SagaRoot)
export default store;