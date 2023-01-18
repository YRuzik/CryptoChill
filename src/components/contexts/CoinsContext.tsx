import {coin, resAllCoin} from "../../interfaces/interfaces";
import {createContext, useEffect, useState} from "react";
import mainService from "../../services/MainService";
import {useDispatch, useSelector} from "react-redux";
import {coinsFetched, coinsFetching, previousCoinValueFetched} from "../../actions";
import Toaster from "../toaster/Toaster";

let inputValue = {
    data: [],
    timestamp: 0
}
export const CoinsContext = createContext<resAllCoin>(inputValue)

function GlobalContext(props: any) {
    const {coins, previousCoinValue}: any = useSelector(state => state)
    const [render, setRender] = useState(false)
    const {getAllCoins} = mainService()
    const dispatch = useDispatch()

    const filterCoins = async () => {
        await getAllCoins().then(data => dispatch(coinsFetched(data.data.filter((item: coin) =>
            item.symbol === 'BTC' ||
            item.symbol === 'ETH' ||
            item.symbol === 'ADA' ||
            item.symbol === 'USDT'
        ))))
    }

    const setter = async () => {
        await filterCoins().then(() => {
            console.log('++++COIN ', coins)
            console.log('++++111COIN ', coins[0])
            dispatch(previousCoinValueFetched(coins[0].priceUsd))
        })

    }

    const getChange = (prevValue: number, currentValue: number) => {
        return prevValue - currentValue
    }

    /*const renderToaster = () => {
        return (
            <Toaster myValue={getChange(previousCoinValue[0].priceUsd, coins[0].priceUsd)}/>
        )
    }*/

    useEffect(() => {
        dispatch(coinsFetching());
        setter()

    }, []);

    useEffect(() => {
        setInterval(() => setRender(true), 5000)
    }, [coins, previousCoinValue])

    return (
        <CoinsContext.Provider value={inputValue}>
            {/*{render ? renderToaster() : null}*/}
            {props.children}
        </CoinsContext.Provider>
    )
}

export default GlobalContext
