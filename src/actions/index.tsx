export const coinsFetching = () => {
    return {
        type: 'COINS_FETCHING'
    }
}

export const coinsFetched = (coins: any) => {
    return {
        type: 'COINS_FETCHED',
        payload: coins
    }
}

export const coinsFetchingError = () => {
    return {
        type: 'COINS_FETCHING_ERROR'
    }
}
