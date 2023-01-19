import {coin, resAllCoin} from "../../interfaces/interfaces";
import {createContext, useCallback, useEffect} from "react";
import mainService from "../../services/MainService";
import {useDispatch} from "react-redux";
import {coinsFetched} from "../../actions";


let inputValue = {
    data: [],
    timestamp: 0
}
export const CoinsContext = createContext<resAllCoin>(inputValue)

function GlobalContext(props: any) {
    const {getAllCoins} = mainService()
    const dispatch = useDispatch()

    const allCoins = useCallback (() => {
       getAllCoins().then(data => data.data.forEach((item: coin) => {
            if (item.id === 'bitcoin' || item.id ===  'ethereum' || item.id === 'tether' || item.id ===  'cardano') {
                dispatch(coinsFetched(item.id, item))
            }
        }))
    }, [])

    useEffect(() => {
        allCoins()
        setInterval(allCoins, 20000)
    }, []);

    return (
        <CoinsContext.Provider value={inputValue}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export default GlobalContext
