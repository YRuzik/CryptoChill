import {coin} from "../interfaces/interfaces";

export const coinsFetching = () => {
    return {
        type: 'COINS_FETCHING'
    }
}

export const coinsFetchingError = () => {
    return {
        type: 'COINS_FETCHING_ERROR'
    }
}

export const coinFetched = (coin: coin) => {
    return {
        type: 'COIN_FETCHED',
        payload: coin
    }
}

export const coinsFetched = (id: any, coin: coin) => {
    return {
        type: 'COINS_FETCHED',
        payload: {id: id, coin: coin}
    }
}
