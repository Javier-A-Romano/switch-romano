import { types } from "../types/types";

export const addAction = (addlist) => ({

    type: types.add,
    payload: addlist
})
export const deleteAction = (addlist) => ({

    type: types.delete,
    payload: addlist
})