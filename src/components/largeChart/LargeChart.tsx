import {AreaChart, Area, XAxis, YAxis, Tooltip, Legend} from "recharts";
import {useEffect, useRef, useState} from "react";
import mainService from "../../services/MainService";
import {useParams} from "react-router";
import {latestData} from "../../interfaces/interfaces";
import {coinsFetched, coinsFetching} from "../../actions";
import {ChangerButton, WrapperChangerButton} from "../../pages/SingleCoinPage.style";

const LargeChart = () => {
    const [allChanges, setAllChanges] = useState<latestData[]>()
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const {getHistoryOfCoin} = mainService()
    const {bitcoinID} = useParams()

    const takeAllChanges = async () => {
        await getHistoryOfCoin(bitcoinID).then(data => setAllChanges(data.data.map((item: any) => {
            return {
                date: new Date(item.date).toLocaleDateString("en-US"),
                priceUsd: Number(item.priceUsd).toFixed(2),
                time: item.time
            }
            }
        )))
    }

    const onClick = () => {
        //@ts-ignore
        console.log(inputRef.current.target())
    }

    let style = ''
    switch (bitcoinID) {
        case 'bitcoin':
            style = 'orange'
            break;
        case 'ethereum':
            style = 'green'
            break;
        case 'tether':
            style = 'blue'
            break;
        case 'cardano':
            style = 'pink'
            break;
        default:
            style = ''
    }

    useEffect(() => {
        coinsFetching()
        takeAllChanges()
    }, [])

    return (
        <>
            <WrapperChangerButton>
                <ChangerButton onClick={() => {
                    onClick()
                }}>1 Y.</ChangerButton>
                <ChangerButton >1 M.</ChangerButton>
                <ChangerButton >1 W.</ChangerButton>
                <ChangerButton >1 D.</ChangerButton>
            </WrapperChangerButton>
        <AreaChart width={1280} height={500} data={allChanges} style={{margin: '0', padding: '0'}}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="20%" stopColor={style} stopOpacity={0.8}/>
                    <stop offset="100%" stopColor={style} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey={'date'} domain={['']} />
            <Tooltip content={CustomTooltip}/>
            <Area name={'USD'} type="monotone" dataKey={'priceUsd'} stroke={style} fill={'url(#colorUv)'} fillOpacity={1} />
        </AreaChart>
        </>
    )
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{background: 'white', border: '1px dotted black'}}>
                <p style={{padding: '0 1rem 0 1rem'}}>{`Price : ${payload[0].value}$`}</p>
                <p style={{padding: '0 1rem 0 1rem'}}>{`Date: ${label}`}</p>
            </div>
        );
    }

    return null;
};

export default LargeChart;
