import { ADD_FAV, REMOVE_FAV,FILTER,ORDER } from "../actions/action-types";

const initalState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
};

const reducer =(state=initalState, { type, payload })=>{
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:payload,
                allCharacters: payload,
                errors:{},
            }
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: payload,
                errors:{},
            }
        case  "GET_FAVORITES":
            return{
                ...state,
                myFavorites:payload,
                errors:{},
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter((character)=> character.gender === payload)
            return{
                ...state,
                myFavorites: 
                payload === 'allCharacters' ?  [...state.allCharacters]
                : allCharactersFiltered 
            }
        case ORDER:
            const allCharactersCopy =[...state.allCharacters]
            return{
                ...state,
                myFavorites: 
                payload === 'A' ? allCharactersCopy.sort((a, b)=> a.id - b.id) : allCharactersCopy.sort((a, b)=> b.id - a.id)
            }
        case "ERROR":
            return {
                ...state,
                errors:payload,
            }
        
        default:
            return {...state}
    }
};

export default reducer;