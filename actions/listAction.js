import { types } from "../types/types";

export const add = (addlist) => ({

    type: types.add,
    payload: addlist
})