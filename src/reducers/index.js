import characters_json from "../data/characters.json";
import { combineReducers } from "redux";
import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions";
function characterss(state = characters_json , action){
    
    switch(action.type){
        case ADD_CHARACTER :
            
            let characters = state.filter(item => item.id !== action.id)
            return characters;
            case REMOVE_CHARACTER:
              let character = [...state,createCharacter(action.id)]; 
                return character;
        default:
            return state;
    }
}
function heroes(state=[],action){
    
  
    switch(action.type){
        case ADD_CHARACTER:
          
            let heroes = [...state,createCharacter(action.id)]; //calls the helper function
            return heroes;
        case REMOVE_CHARACTER:
            let hero = state.filter(item => item.id !== action.id)
            return hero;
        default:
            return state;
    }
}

function createCharacter(id){
    let character = characters_json.find((c)=> c.id === id);
    
    return character;
}

const rootReducer = combineReducers({
    characterss,
    heroes
})
export default rootReducer;