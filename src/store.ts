import { combineReducers, createStore } from "redux";
import showReducer from "./reducer/show";

const reducer = combineReducers({
  show: showReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
