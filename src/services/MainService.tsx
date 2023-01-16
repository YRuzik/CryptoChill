import {useDispatch} from "react-redux";
import {useHttp} from "../hooks/http.hook";
import {coinFetched, coinsFetched, coinsFetchingError} from "../actions";
import {coin} from "../interfaces/interfaces";


const MainService = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    const _baseURL = 'https://api.coincap.io/v2/'

    const getAllCoins = async() => {
        return (
            await request(`${_baseURL}assets`)
                    .then((res: any) => dispatch(coinsFetched(res.data.filter((item: coin) =>
                        item.symbol === 'BTC' ||
                        item.symbol === 'ETH' ||
                        item.symbol === 'ADA' ||
                        item.symbol === 'USDT'
                    ))))
                    .catch(() => dispatch(coinsFetchingError()))
        )
    }

    const getHistoryOfCoin = async(id: string | undefined , interval: string | undefined = 'd1') => {
        return (
            await request(`${_baseURL}assets/${id}/history?interval=${interval}`)
        )
    }

    const getCoin = async(id: string | undefined) => {
        return (
            await request(`${_baseURL}assets/${id}`)
                .then((res: any) => dispatch(coinFetched(res.data)))
                .catch(() => dispatch(coinsFetchingError()))
        )
    }

    return {getAllCoins, dispatch, getHistoryOfCoin, getCoin}
}

export default MainService;
