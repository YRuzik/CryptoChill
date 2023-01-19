import LargeChart from "../components/largeChart/LargeChart";
import {Container, Error} from "../styles/styles";
import MainService from "../services/MainService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {coinFetched, coinsFetching, coinsFetchingError} from "../actions";
import {useNavigate, useParams} from "react-router";
import {Information, Market, Name, NameAndTable, WrapperChangerButton} from "./SingleCoinPage.style";
import Spinner from "../components/spinner/Spinner";
import {LinkButton} from "../components/coinsTable/CoinsTable.style";

import {resCoin} from "../interfaces/interfaces";

import ada from "resources/img/ada.png"
import bit from "resources/img/bit.png"
import eth from "resources/img/eth.png"
import usdt from "resources/img/usdt.png"


const SingleCoinPage = () => {
    const dispatch = useDispatch()
    const {coinsLoadingStatus, coin}: any = useSelector(state => state)
    const {bitcoinID} = useParams()
    const {getCoin} = MainService();
    const navigate = useNavigate()


    useEffect( () => {
        dispatch(coinsFetching());
        if(bitcoinID) getCoin(bitcoinID)
            .then((res: resCoin) => dispatch(coinFetched(res.data)))
            .catch(() => dispatch(coinsFetchingError()))
        let timerID = setInterval(() => getCoin(bitcoinID), 20000)

        return () => {
            clearInterval(timerID)
        }
    }, [])

    if(coinsLoadingStatus === 'error') {
            navigate('/404')
    }

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

    let style = ''
    let currentIMG = ''

    if (coin) {
        switch (coin.symbol) {
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
            {coin ?
                <>
                    <WrapperChangerButton style={{justifyContent: 'start', marginLeft: '2rem'}}>
                    <LinkButton to={`/`} style={{background: style}}>Back to main page</LinkButton>
                    </WrapperChangerButton>
                    <NameAndTable>
                        <Name>
                            <h1 style={{textAlign: 'start', display: "flex", alignItems: "center", paddingLeft: '1rem'}}>
                                <img src={currentIMG} style={{paddingRight: '5px'}}/>
                                {coin.name}
                                <span style={{color: style, paddingLeft: '10px'}}>
                            {coin.symbol}
                        </span>
                            </h1>
                            <h1 style={{paddingRight: '1rem'}}>Current Price: <span style={{color: style}}>{Number(coin.priceUsd).toFixed(2)} $</span></h1>
                        </Name>
                        <LargeChart/>
                    </NameAndTable>
                    <h1 style={{textAlign: 'start', marginLeft: '6rem'}}>Market Statistic</h1>
                    <hr style={{marginLeft: '6rem'}}/>
                    <Market>
                        {renderItems('24hrs | Volume', `${format(coin.volumeUsd24Hr)} $`)}
                        {renderItems('Rank', `Top ${coin.rank}`)}
                        {renderItems('24hrs | Average Price', `${format(coin.vwap24Hr)} $`)}
                        {renderItems('Changes', `${+coin.changePercent24Hr > 0 ? '+' : ''}${format(coin.changePercent24Hr)}%`, +coin.changePercent24Hr > 0 ? 'green' : 'red')}
                        {renderItems('Max. Supplies', `${format(coin.maxSupply)}`)}
                        {renderItems('Available Supplies', `${format(coin.supply)}`)}
                    </Market>
                </>
                : null
            }

        </Container>

    )
}

export default SingleCoinPage;
