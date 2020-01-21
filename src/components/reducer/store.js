import { createStore } from 'redux'

const initialState = {
    startingCoordinates: "",
    destinationCoordinates: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_STARTING_COORDINATE':
            return Object.assign({}, state, { startingCoordinates: action.query })
        case 'SAVE_DESTINATION_COORDINATE':
            return Object.assign({}, state, { destinationCoordinates: action.query })
        default:
            return state
    }
}; 



const store = createStore(reducer)
export default store;