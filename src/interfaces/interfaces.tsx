export interface states {
    coins: object[];
    coin: object[];
    coinsLoadingStatus: string;
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

export interface coinIcons {
    asset_id: string;
    url: string;
}

export interface latestData {
    priceUsd: string;
    time: number;
    date: string;
}

