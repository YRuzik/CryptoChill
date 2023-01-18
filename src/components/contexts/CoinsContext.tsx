import {coin, resAllCoin} from "../../interfaces/interfaces";
import {createContext, useEffect} from "react";
import mainService from "../../services/MainService";
import {useDispatch} from "react-redux";
import {coinsFetched, coinsFetching} from "../../actions";

let inputValue = {
    data: [],
    timestamp: 0
}
export const CoinsContext = createContext<resAllCoin>(inputValue)

function GlobalContext(props: any) {
    const {getAllCoins} = mainService()
    const dispatch = useDispatch()

    const filterCoins = async () => {
        getAllCoins().then(data => dispatch(coinsFetched(data.data.filter((item: coin) =>
            item.symbol === 'BTC' ||
            item.symbol === 'ETH' ||
            item.symbol === 'ADA' ||
            item.symbol === 'USDT'
        ))))
    }

    useEffect(() => {
        dispatch(coinsFetching());
        filterCoins()

        const timerID = setInterval(filterCoins, 10000)
        return () => {
            clearInterval(timerID)
        }
    }, []);

    return (
        <CoinsContext.Provider value={inputValue}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export default GlobalContext
