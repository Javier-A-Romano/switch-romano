import { types } from '../types/types'
const initialState =
    [{
        "id": "0.5091013499818855",
        "option1": "6",
        "option2": "7",
        "option3": "8",
        "question1": "4 + 4 es igual a ?",
        "theme": "SUMA",
        "correct": "3",
    }, {
        "id": "0.53525235235235",
        "option1": "constante",
        "option2": "condicional",
        "option3": "variable",
        "question1": "IF( ){} es un",
        "theme": "Programacion",
        "correct": "2",
    }, {
        "id": "0.535252352334235",
        "option1": "como estas?",
        "option2": "cuanto estas?",
        "option3": "como estoy?",
        "question1": "how are you? es igual a",
        "theme": "Saludo",
        "correct": "1",
    }


    ]


export const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'add':
            console.log('add payload')
            console.log(action.payload);
            console.log('add payload')

            return state.concat(action.payload);

        case 'delete':
            return state.filter(todo => todo.id !== action.payload); // 123123123



        default:
            return state;
    }


}