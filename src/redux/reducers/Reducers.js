export const CompletedToDos = (state = {}, action) => {
    switch (action.type) {
        case "SetCompletedToDos":
            return action.payload;
        default:
            return state;
    }
}


export const InCompleteToDos = (state = {}, action) => {
    switch (action.type) {
        case "SetInCompleteToDos":
            return action.payload;
        default:
            return state;
    }
}

export const ToDosList = (state = {}, action) => {
    switch (action.type) {
        case "SetToDos":
            return action.payload;
        default:
            return state;
    }
}

