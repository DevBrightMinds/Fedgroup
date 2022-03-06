export const setCompletedToDos = (complete) => {
    return {
        type: "SetCompletedToDos",
        payload: complete
    }
}

export const setInCompleteToDos = (inComplete) => {
    return {
        type: "SetInCompleteToDos",
        payload: inComplete
    }
}


export const addToDos = (toDos) => {
    return {
        type: "SetToDos",
        payload: toDos
    }
}
