import {coin, resAllCoin} from "../../interfaces/interfaces";
import {createContext, useEffect, useState} from "react";
import mainService from "../../services/MainService";
import {useDispatch} from "react-redux";
import {coinsFetched, coinsFetching, previousCoinValueFetched} from "../../actions";
import Toaster from "../toaster/Toaster";

let inputValue = {
    data: [],
    timestamp: 0
}
export const CoinsContext = createContext<resAllCoin>(inputValue)

function GlobalContext(props: any) {
    const [isReady, setIsReady] = useState(false)
    const {getAllCoins} = mainService()
    const dispatch = useDispatch()

    const filterCoins = async () => {
        await getAllCoins().then(data => dispatch(coinsFetched(data.data.filter((item: coin) =>
            item.symbol === 'BTC' ||
            item.symbol === 'ETH' ||
            item.symbol === 'ADA' ||
            item.symbol === 'USDT'
        ))))
        setIsReady(true)
    }

    useEffect(() => {
        dispatch(coinsFetching());
        filterCoins()

        setInterval(filterCoins, 10000)
    }, []);


    return (
        <CoinsContext.Provider value={inputValue}>
            <Toaster isReady={isReady}/>
            {props.children}
        </CoinsContext.Provider>
    )
}

export default GlobalContext
