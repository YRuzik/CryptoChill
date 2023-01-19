import {SourceActionType, states} from "../interfaces/interfaces";

const initialState = {
    coin: [],
    coinsLoadingStatus: 'loading',

    bitcoin: [],
    ethereum: [],
    tether: [],
    cardano: []
}

function mainReducer (state = initialState, action: any) {
    switch (action.type){
        case 'COINS_FETCHING':
            return {
                ...state,
                coinsLoadingStatus: 'loading'
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

        case SourceActionType.setSource: {
            const { id, coin } = action.payload;
            return {
                ...state,
                [id]: coin,
                coinsLoadingStatus: 'idle'
            };
        }

        default: return state;
    }
}

export default mainReducer;
