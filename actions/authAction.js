import { types } from "../types/types";




export const loginPromese = () => {
    return (dispatch) => {


    }

}
export const deleteAction = (uid, displayName) => ({

    type: types.delete,
    payload: {
        uid, displayName
    }
})