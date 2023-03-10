import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from "recharts";
import {useEffect, useState} from "react";
import mainService from "../../services/MainService";
import {useParams} from "react-router";
import {latestData, resData} from "../../interfaces/interfaces";
import {coinsFetching} from "../../actions";
import {ChangerButton, WrapperChangerButton} from "../../pages/SingleCoinPage.style";

const LargeChart = () => {
    const [allChanges, setAllChanges] = useState<latestData[]>()
    const [oneDayChanges, setOneDayChanges] = useState<latestData[]>()
    const [currentChanges, setCurrentChanges] = useState<latestData[]>()

    const {getHistoryOfCoin} = mainService()
    const {bitcoinID} = useParams()

    const takeAllChanges = async () => {
        let months = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sep.','Oct.','Nov.','Dec.']

        await getHistoryOfCoin(bitcoinID).then((data: resData) => setAllChanges(data.data.map((item) => {
            return {
                date: new Date(item.date).getUTCDate().toLocaleString('en-US').toString() + ` ${months[new Date(item.date).getMonth()]}` + ` ${new Date(item.date).getUTCFullYear()}`,
                priceUsd: Number(item.priceUsd).toFixed(2),
                time: item.time
            }
            }
        )))
    }

    const take1YChanges = async () => {
        await takeAllChanges()
        await setCurrentChanges(allChanges)
    }

    const take1MChanges = async () => {
        await takeAllChanges()
        await setCurrentChanges(allChanges?.slice(allChanges?.length-31, allChanges?.length))
    }

    const take1WChanges = async () => {
        await takeAllChanges()
        await setCurrentChanges(allChanges?.slice(allChanges?.length-8, allChanges?.length))
    }

    const take1DChanges = async() => {
        await takeHoursChanges()
        await setCurrentChanges(oneDayChanges?.slice(oneDayChanges?.length-25, oneDayChanges?.length))
    }

    const getZero = (num: string) => {
        if (+num < 10) {
            return `0${num}`
        } else return num
    }

    const takeHoursChanges = async () => {
        await getHistoryOfCoin(bitcoinID, 'h1').then((data: resData) => setOneDayChanges(data.data.map((item) => {
            return {
                date: getZero(new Date(item.date).getHours().toString()) + ':00',
                priceUsd: Number(item.priceUsd).toFixed(2),
                time: item.time
            }
        }
        )))
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
        takeHoursChanges()

    }, [])

    return (
        <>
            <WrapperChangerButton>
                <ChangerButton onClick={take1YChanges}>1 Y.</ChangerButton>
                <ChangerButton onClick={take1MChanges}>1 M.</ChangerButton>
                <ChangerButton onClick={take1WChanges}>1 W.</ChangerButton>
                <ChangerButton onClick={take1DChanges}>1 D.</ChangerButton>
            </WrapperChangerButton>
            <ResponsiveContainer width={'100%'} height={500}>
                <AreaChart data={currentChanges ? currentChanges : allChanges} style={{margin: '0', padding: '0'}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="20%" stopColor={style} stopOpacity={0.8}/>
                            <stop offset="100%" stopColor={style} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={'date'} interval={"preserveStart"} minTickGap={56} style={{display: 'flex', justifyContent: "space-around"}} />
                    <Tooltip content={CustomTooltip}/>
                    <Area name={'USD'} type="monotone" dataKey={'priceUsd'} stroke={style} fill={'url(#colorUv)'} fillOpacity={1} />
                </AreaChart>
            </ResponsiveContainer>
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
