import {states} from "../interfaces/interfaces";

const initialState: states = {
    coins: [],
    coinsLoadingStatus: 'idle'
}

function reducer (state: states = initialState, action: any) {
    switch (action.type){
        case 'COINS_FETCHING':
            return {
                ...state,
                coinsLoadingStatus: 'loading'
            }

        case 'COINS_FETCHED':
            return {
                ...state,
                coins: action.payload,
                coinsLoadingStatus: 'idle'
            }

        case 'COINS_FETCHING_ERROR':
            return {
                ...state,
                coinsLoadingStatus: 'error'
            }

        default: return state;
    }
}

export default reducer;
