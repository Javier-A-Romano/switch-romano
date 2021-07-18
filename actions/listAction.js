import { types } from "../types/types";

export const addAction = (addlist) => ({

    type: types.add,
    payload: addlist
})