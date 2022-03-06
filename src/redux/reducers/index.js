import { combineReducers } from "redux";

import {
    ToDosList,
    CompletedToDos,
    InCompleteToDos
} from "./Reducers";

const allReducers = combineReducers({
    ToDosList,
    CompletedToDos,
    InCompleteToDos

});

export default allReducers;