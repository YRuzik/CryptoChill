import {LinkButton, LinkTo, TBodyTD} from "../coinsTable/CoinsTable.style";
import mainService from "../../services/MainService";
import {latestData} from "../../interfaces/interfaces";
import {useCallback, useEffect, useState} from "react";
import TableCharts from "../tableCharts/TableCharts";

import ada from "resources/img/ada.png"
import bit from "resources/img/bit.png"
import eth from "resources/img/eth.png"
import usdt from "resources/img/usdt.png"


const CoinsTableItem = ({name, symbol, priceUsd, current, id, changePercent24Hr}: any) => {
    const [allChanges, setAllChanges] = useState<latestData[]>()
    const {getHistoryOfCoin} = mainService();

    const priceFormat = new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(priceUsd).toFixed(2)))
    changePercent24Hr = Number(changePercent24Hr).toFixed(2)
    let currentIMG = ''

    const takeAllChanges = useCallback(async () => {
        await getHistoryOfCoin(id).then(data => setAllChanges(data.data))
    }, [])

    useEffect(() => {
        takeAllChanges()

        const timerID = setInterval(takeAllChanges, 20000)
        return (() => {
            clearInterval(timerID)
        })
    }, [])

    switch (symbol) {
        case 'BTC':
             currentIMG = bit;
             break
        case 'ETH':
            currentIMG = eth;
            break
        case 'ADA':
            currentIMG = ada;
            break
        case 'USDT':
            currentIMG = usdt;
            break
        default: break
    }

    return (
        <>
            <TBodyTD>{current+1}</TBodyTD>
            <TBodyTD>
                <LinkTo to={`/${id}`}>
                    <img alt={'currentImg'} style={{paddingRight: '0.5rem'}} src={currentIMG !== undefined ? currentIMG : undefined}/>
                    {name}
                    <span style={{opacity: 0.5, paddingLeft: '0.5rem'}}>{symbol}</span>
                </LinkTo>
            </TBodyTD>
            <TBodyTD>{priceFormat} $</TBodyTD>
            <TBodyTD style={changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'}}>
                {changePercent24Hr > 0 ? '+' : null}
                {changePercent24Hr !== undefined ? changePercent24Hr : 'in process'}%
            </TBodyTD>
            <TBodyTD>
                <TableCharts data={allChanges}/>
            </TBodyTD>
            <TBodyTD><LinkButton to={`/${id}`}>More</LinkButton></TBodyTD>
        </>
    )
}

export default CoinsTableItem;
