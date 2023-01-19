import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import mainReducer from "../reducers/mainReducer";

const store = createStore(mainReducer, composeWithDevTools());

export default store;
