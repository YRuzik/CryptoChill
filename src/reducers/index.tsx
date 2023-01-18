import {states} from "../interfaces/interfaces";

const initialState: states = {
    coins: [],
    coin: [],
    coinsLoadingStatus: 'idle',
    previousCoinValue: 0
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

        case 'COIN_FETCHED':
            return {
                ...state,
                coin: action.payload,
                coinsLoadingStatus: 'idle'
            }

        case 'PREVIOUS_COIN_VALUE_FETCHED':
            return {
                ...state,
                previousCoinValue: action.payload,
                coinsLoadingStatus: 'idle'
            }

        default: return state;
    }
}

export default reducer;
