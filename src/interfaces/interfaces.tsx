export interface states {
    coins: object[];
    coin: object[];
    coinsLoadingStatus: string;
    previousCoinValue: object[];
}

export interface coin {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}

export interface resAllCoin {
    data: coin[]
    timestamp: number
}

export interface resCoin {
    data: coin;
    timestamp: number
}

export interface resData {
    data: latestData[];
    timestamp: number
}

export interface latestData {
    priceUsd: string;
    time: number;
    date: string;
}

export const SourceActionType = {
    setSource: 'COINS_FETCHED'
}

