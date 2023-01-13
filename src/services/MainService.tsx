import {useDispatch} from "react-redux";
import {useHttp} from "../hooks/http.hook";
import {coinsFetched, coinsFetching, coinsFetchingError} from "../actions";
import {coin} from "../interfaces/interfaces";


const MainService = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    const _baseURL = 'http://rest.coinapi.io/v1/'
    // const currencies = ['BTC', 'ETH', 'ADA', 'SOL']

    const getAllCoins = async() => {
        return (
            await request(`${_baseURL}assets`)
                    .then((data: coin[]) => dispatch(coinsFetched(data.filter((item: coin) =>
                        item.asset_id === 'BTC' ||
                        item.asset_id === 'ETC' ||
                        item.asset_id === 'ADA' ||
                        item.asset_id === 'SOL'
                        //TO DO - code refactor here
                    ))))
                    .catch(() => dispatch(coinsFetchingError()))
        )
    }

    return {getAllCoins, dispatch}
}

export default MainService;
