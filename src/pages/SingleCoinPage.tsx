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
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}> 24hrs | Volume</h3>
                        <h3>{new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(currentCoin[0].volumeUsd24Hr).toFixed(2)))} $</h3>
                    </Information>
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}>Rank</h3>
                        <h3>Top {currentCoin[0].rank}</h3>
                    </Information>
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}>24hrs | Average Price</h3>
                        <h3>{new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(currentCoin[0].vwap24Hr).toFixed(0)))} $</h3>
                    </Information>
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}>Changes</h3>
                        <h3 style={{color: currentCoin[0].changePercent24Hr > 0 ? 'green' : 'red'}}>{currentCoin[0].changePercent24Hr > 0 ? '+' : null}{new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(currentCoin[0].changePercent24Hr).toFixed(2)))}%</h3>
                    </Information>
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}>Max. Supplies</h3>
                        <h3>{new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(currentCoin[0].maxSupply).toFixed(0)))}</h3>
                    </Information>
                    <Information>
                        <h3 style={{color: "rgba(0,0,0,.4)"}}>Available Supplies</h3>
                        <h3>{new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(currentCoin[0].supply).toFixed(0)))}</h3>
                    </Information>
                </Market>
                </>
            :
            null
            }
        </Container>

    )
}

export default SingleCoinPage;
