import LargeChart from "../components/largeChart/LargeChart";
import {Container, Error} from "../styles/styles";
import MainService from "../services/MainService";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {coinsFetching} from "../actions";
import {useParams} from "react-router";
import {coin} from "../interfaces/interfaces";
import {Information, Market, Name, NameAndTable} from "./SingleCoinPage.style";
import Spinner from "../components/spinner/Spinner";

// @ts-ignore
import ada from "../resources/img/ada.png"
// @ts-ignore
import bit from "../resources/img/bit.png"
// @ts-ignore
import eth from "../resources/img/eth.png"
// @ts-ignore
import usdt from "../resources/img/usdt.png"

const SingleCoinPage = () => {
    const {coins, coinsLoadingStatus}: any = useSelector(state => state)
    const {bitcoinID} = useParams()
    const {getAllCoins, dispatch} = MainService();

    useEffect(() => {
        dispatch(coinsFetching());
        getAllCoins();
    }, [])

    const format = (value:string | number) => {
        return new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(value).toFixed(2)))
    }

    const renderItems = (label: string, value: string | number, style?: string) => {
        if (value === '0') {
            value = 'No Data'
        }
        return (
            <Information>
                <h3 style={{color: "rgba(0,0,0,.4)"}}>{label}</h3>
                <h3 style={{color: style}}>{value}</h3>
            </Information>
        )
    }

    if (coinsLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (coinsLoadingStatus === 'error') {
        return <Error>Ошибка загрузки...</Error>
    }

    let currentCoin = coins.filter((item: coin) => item.id === bitcoinID)

    let style = ''
    let currentIMG = ''

    if (currentCoin.length > 0) {
        switch (currentCoin[0].symbol) {
            case 'BTC':
                style = 'orange'
                currentIMG = bit
                break;
            case 'ETH':
                style = 'green'
                currentIMG = eth
                break;
            case 'USDT':
                style = 'blue'
                currentIMG = usdt
                break;
            case 'ADA':
                style = 'pink'
                currentIMG = ada
                break;
            default: style = ''
        }
    }

    return (

        <Container>
            {currentCoin.length > 0 ?
                <NameAndTable>
                    <Name>
                        <h1 style={{textAlign: 'start', display: "flex", alignItems: "center", paddingLeft: '1rem'}}>
                            <img src={currentIMG} style={{paddingRight: '5px'}}/>
                            {currentCoin[0].name}
                            <span style={{color: style, paddingLeft: '10px'}}>
                            {currentCoin[0].symbol}
                        </span>
                        </h1>
                        <h1 style={{paddingRight: '1rem'}}>Current Price: <span style={{color: style}}>{Number(currentCoin[0].priceUsd).toFixed(2)} $</span></h1>
                    </Name>
                <LargeChart/>
                </NameAndTable>
            :
            null
            }
            {currentCoin.length > 0 ?
                <>
                <h1 style={{textAlign: 'start', marginLeft: '6rem'}}>Market Statistic</h1>
                    <hr style={{marginLeft: '6rem'}}/>
                <Market>
                    {renderItems('24hrs | Volume', `${format(currentCoin[0].volumeUsd24Hr)} $`)}
                    {renderItems('Rank', `Top ${currentCoin[0].rank}`)}
                    {renderItems('24hrs | Average Price', `${format(currentCoin[0].vwap24Hr)} $`)}
                    {renderItems('Changes', `${currentCoin[0].changePercent24Hr > 0 ? '+' : ''}${format(currentCoin[0].changePercent24Hr)}%`, currentCoin[0].changePercent24Hr > 0 ? 'green' : 'red')}
                    {renderItems('Max. Supplies', `${format(currentCoin[0].maxSupply)}`)}
                    {renderItems('Available Supplies', `${format(currentCoin[0].supply)}`)}
                </Market>
                </>
            :
            null
            }
        </Container>

    )
}

export default SingleCoinPage;
