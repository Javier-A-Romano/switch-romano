import { types } from '../types/types'
const initialState =
{
    "nombre": "0.5091013499818855",
    "id": "6",

}




export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'login':
            console.log('add payload')
            console.log(action.payload);
            console.log('add payload')

            return state.concat(action.payload);

        case 'logout':
            return state.filter(todo => todo.id !== action.payload.id); // 123123123



        default:
            return state;
    }


}